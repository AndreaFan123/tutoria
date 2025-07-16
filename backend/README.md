# 🧠 Tutoria Backend

> 教師為學生建立語音教材的 API 服務。使用 FastAPI + PostgreSQL + JWT 架構，支援老師建立學生帳號與教案，學生登入後可進行複習與留言。

---

## 📦 技術棧

| 類別     | 技術選擇                |
| -------- | ----------------------- |
| 語言     | Python 3.10+            |
| Web 框架 | FastAPI                 |
| 資料庫   | PostgreSQL + SQLAlchemy |
| 認證     | JWT（python-jose）      |
| 密碼加密 | passlib[bcrypt]         |
| 環境管理 | Poetry + `.env`         |
| 測試工具 | pytest + httpx          |

---

## 📂 專案結構

```bash
backend/app/
├── main.py                  # FastAPI app init
├── api/
│   ├── auth.py              # 教師 & 學生登入註冊
│   └── teacher.py           # 建立學生帳號等操作
├── models/
│   ├── user.py              # Teacher, Student 資料表
├── schemas/
│   ├── auth.py              # 請求/回傳格式定義
├── core/
│   ├── security.py          # 密碼加密與 JWT
│   ├── config.py            # 設定載入 from .env
├── db/
│   ├── session.py           # DB session 管理
├── tests/
│   ├── test_auth.py         # 教師 & 學生登入註冊測試
│   └── conftest.py          # pytest fixtures
```

---

## 安裝與啟動方式

```bash
# 查詢虛擬環境路徑
poetry env info --path

source $(poetry env info --path)/bin/activate
```

---

## 認證流程說明

- 使用 JWT（Access + Refresh Token 機制）

- 登入成功後會取得 access token

- 所有需認證的 API 必須帶上：`Authorization: Bearer <token>`

---

## 使用者模型關係

Teacher 可建立多位 Student

Student 可登入平台，查看該老師分配的教案

```plain
Teacher 1 ─────┬─> Student A
               └─> Student B

Student ──> 閱讀 lesson
          └─> 留言/勾選已練習
```

---

## API 規劃（MVP）

| Method | Path                           | 說明               | 權限    |
| ------ | ------------------------------ | ------------------ | ------- |
| POST   | `/auth/teacher/register`       | 老師註冊           | Public  |
| POST   | `/auth/teacher/login`          | 老師登入           | Public  |
| POST   | `/teacher/students`            | 建立學生帳號       | Teacher |
| POST   | `/auth/student/login`          | 學生登入           | Public  |
| GET    | `/student/lessons`             | 取得分配的教案列表 | Student |
| GET    | `/student/lesson/{id}`         | 查看教案內容與語音 | Student |
| POST   | `/student/lesson/{id}/comment` | 留言給老師         | Student |

---

## 測試建置

- 測試工具：pytest + httpx.AsyncClient

- 使用 PostgreSQL 測試資料庫

- 測試資料庫與正式隔離，透過 .env.test

```bash
poetry run pytest
```

---

## 測試資料結構範例

- `tests/conftest.py`: 建立測試資料庫、建立 test client

- `tests/test_auth.py`: 測試老師註冊/登入、學生登入

- `tests/test_lesson.py`: 測試教案讀取、留言流程

---

## 架構圖（簡化版）

```plaintext
Teacher
 ├─> 建立學生帳號 → Student
 ├─> 建立教案 → Lesson
 └─> 回覆留言 ← LessonComment ← Student 留言

Student
 ├─> 登入
 ├─> 查看 Lesson（text + audio）
 └─> 留言 / 練習回報
```

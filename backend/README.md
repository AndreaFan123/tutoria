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

| Method | Path                            | 說明                             | 權限    | 備註               |
| ------ | ------------------------------- | -------------------------------- | ------- | ------------------ |
| POST   | `/auth/teacher/register`        | 老師註冊                         | Public  | -                  |
| POST   | `/auth/teacher/login`           | 老師登入                         | Public  | -                  |
| GET    | `/teacher/me`                   | 取得老師個人資料                 | Teacher | -                  |
| POST   | `/teachers/upload-id`           | 老師上傳證件圖檔（初期非強制）   | Teacher | MVP 先支援單次上傳 |
| POST   | `/teacher/students`             | 建立學生帳號                     | Teacher | -                  |
| POST   | `/teacher/lessons`              | 建立教案                         | Teacher | -                  |
| GET    | `/teacher/lessons`              | 取得老師的教案列表               | Teacher | -                  |
| GET    | `/teacher/lesson/{id}`          | 查看教案內容與語音               | Teacher | -                  |
| POST   | `/teacher/lesson/{id}/comment`  | 回覆學生留言                     | Teacher | -                  |
| POST   | `/teacher/lesson/{id}/practice` | 標記學生已練習                   | Teacher | -                  |
| POST   | `/auth/student/login`           | 學生登入                         | Public  | -                  |
| GET    | `/student/lessons`              | 取得分配的教案列表               | Student | -                  |
| GET    | `/student/lesson/{id}`          | 查看教案內容與語音               | Student | -                  |
| POST   | `/student/lesson/{id}/comment`  | 留言給老師                       | Student | -                  |
| GET    | `/admin/teachers/unverified`    | 後台：檢視尚未驗證老師清單       | Admin   | -                  |
| POST   | `/admin/teachers/verify`        | 後台：驗證老師帳號（含上傳資料） | Admin   | -                  |

## 🚧 未來擴充功能（非 MVP 階段）

| Method | Path                                | 說明                           | 權限    | 備註                      |
| ------ | ----------------------------------- | ------------------------------ | ------- | ------------------------- |
| POST   | `/teachers/upload-id-front`         | 老師上傳證件正面照             | Teacher | 🚧 分段上傳               |
| POST   | `/teachers/upload-id-back`          | 老師上傳證件反面照             | Teacher | 🚧 分段上傳               |
| POST   | `/teachers/upload-certificate`      | 老師上傳教學證照               | Teacher | 🚧 附加資歷佐證           |
| GET    | `/admin/teacher/{id}/id-images`     | 後台：檢視單一老師證件圖       | Admin   | 🚧 用於人工審核           |
| PATCH  | `/admin/teacher/{id}/verify-status` | 後台：手動設定帳號是否通過驗證 | Admin   | 🚧 可作為細部狀態控管     |
| POST   | `/admin/teacher/{id}/reject`        | 後台：駁回老師驗證申請         | Admin   | 🚧 可搭配通知理由         |
| POST   | `/teachers/reupload-id`             | 老師補件上傳證件               | Teacher | 🚧 配合駁回通知重新上傳   |
| GET    | `/teachers/verify-status`           | 老師查詢目前驗證進度           | Teacher | 🚧 UI 顯示驗證中/已通過等 |
| GET    | `/admin/teacher-audit-log/{id}`     | 後台：查看老師帳號審核歷史     | Admin   | 🚧 若需留痕，可補建此功能 |

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

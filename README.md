# 📘 Tutoria

> 幫助語言老師快速建立教案、語音教材與複習進度，讓學生隨時隨地都能有效複習與互動。

---

## 📌 專案介紹

Tutoria 是一個面向個人教師與學生的語言教學平台，老師可以快速建立結構化的教材（含段落與語音），學生可以依據內容進行複習、留言並獲得回饋。平台設計以「老師內容建構直覺」與「學生學習體驗一致性」為核心。

---

## 🎯 專案目標

- 幫助語言老師快速建立可重複使用的教材與語音教案
- 支援多段落、語音播放與學生互動留言
- 學生可無需受限時間地點，針對課程內容進行複習與回報
- 教案內容格式與學生端呈現一致，避免教材失真
- 將來可成為老師訂閱制 SaaS 工具

---

## 🛠 技術使用

| 區塊     | 技術 / 工具                                   |
| -------- | --------------------------------------------- |
| Backend  | FastAPI, SQLAlchemy, PostgreSQL               |
| Frontend | Next.js (App Router), TypeScript, TailwindCSS |
| 認證機制 | JWT (access + refresh token)                  |
| 儲存方式 | 音檔本地上傳（可擴充 S3）                     |
| 部署工具 | Docker / docker-compose（可擴充 CI/CD）       |

---

## 🚀 MVP 功能

### 🧑‍🏫 老師端

- 登入 / 註冊
- 建立學生帳號
- 建立科目 / 教案
- 編輯段落（所見即所得）
- 為段落上傳語音檔
- 發佈教案（或儲存為草稿）
- 查看學生留言與練習進度
- 回覆留言

### 🧑‍🎓 學生端

- 登入 / 註冊
- 瀏覽老師分配的教案
- 播放段落語音
- 勾選「已練習」段落
- 留言給老師
- 查看老師回覆

---

## 📅 開發時程（預估 4 週 MVP）

| 週數    | 任務範圍                                    |
| ------- | ------------------------------------------- |
| 第 1 週 | 初始化專案，登入系統，資料表與 API 基礎結構 |
| 第 2 週 | 教案建立區（段落編輯器 + 音檔上傳 + 預覽）  |
| 第 3 週 | 學生端瀏覽、複習、留言功能                  |
| 第 4 週 | 教師回覆系統、學生進度統計、整體整合測試    |

---

## 🧩 未來擴充功能（Post-MVP）

- 語音轉文字（Whisper API / OpenAI）
- 學生上傳發音錄音（回饋比對）
- AI 自動生成複習建議 / 單字清單
- 題庫系統（選擇題 / 簡答練習）
- 教師訂閱方案（SaaS 計費）
- 教案模板系統 / 匯入外部教材
- LINE / Email 提醒系統

---

## 🧱 架構圖（MVP）

```bash
Student ─┬───> Login
         └───> Lesson List
              ├──> Lesson Content (text + audio)
              ├──> Mark Practiced
              └──> Comment →──┐
                              ↓
Teacher ───> Dashboard ─────> View Comments
                          ├──> Create Lesson
                          ├──> Upload Audio
                          └──> Reply to Comments
```

## 📂 專案結構概要

tutoria/
├── backend/ # FastAPI API 專案
│ └── app/ # 包含 models、routes、schemas、services
├── frontend/ # Next.js 前端介面
│ └── app/ # 老師端 / 學生端畫面
├── .env.example # 範例環境變數
├── docker-compose.yml
└── README.md

📣 License Copyright © 2025
Tutoria 團隊（私人開發中）

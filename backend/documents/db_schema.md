# 🧱 Database Schema（資料模型）

本平台目前設計 4 個主要資料表，分別為：

- Teacher（老師）

- Student（學生）

- Lesson（課程紀錄）

- Comment（課堂留言）

## 📘 Teacher 老師

| 欄位名稱          | 類型    | 說明             |
| ----------------- | ------- | ---------------- |
| `id`              | Integer | 主鍵，自動遞增   |
| `email`           | String  | 登入帳號（唯一） |
| `hashed_password` | String  | 加密後密碼       |
| `full_name`       | String  | 老師姓名（可選） |

### 🔁 關聯：

- students: 一對多 → Student.teacher

## 👩‍🎓 Student 學生

| 欄位名稱     | 類型    | 說明                    |
| ------------ | ------- | ----------------------- |
| `id`         | Integer | 主鍵，自動遞增          |
| `name`       | String  | 學生姓名                |
| `login_code` | String  | 學生專屬登入碼（唯一）  |
| `teacher_id` | Integer | 外鍵，對應 `Teacher.id` |

### 🔁 關聯：

- teacher: 多對一 → Teacher.students
- lessons: 一對多 → Lesson.student

## 📚 Lesson

| 欄位名稱         | 類型    | 說明                    |
| ---------------- | ------- | ----------------------- |
| `id`             | Integer | 主鍵                    |
| `title`          | String  | 課程主題                |
| `date`           | Date    | 上課日期                |
| `content`        | Text    | 課堂文字筆記（可選）    |
| `audio_url`      | String  | 音檔連結（可選）        |
| `attachment_url` | String  | 附件連結（可選）        |
| `student_id`     | Integer | 外鍵，對應 `Student.id` |

### 🔁 關聯

🔁 關聯：

- student: 多對一 → Student.lessons
- comments: 一對多 → Comment.lesson

## 💬 Comment 課堂留言

| 欄位名稱     | 類型     | 說明                   |
| ------------ | -------- | ---------------------- |
| `id`         | Integer  | 主鍵                   |
| `content`    | Text     | 留言內容               |
| `created_at` | DateTime | 留言時間（預設為現在） |
| `lesson_id`  | Integer  | 外鍵，對應 `Lesson.id` |

### 🔁 關聯

- lesson: 多對一 → Lesson.comments：

## 🔗 關聯示意圖（ER）

```mermaid
Teacher ───< Student ───< Lesson ───< Comment
```

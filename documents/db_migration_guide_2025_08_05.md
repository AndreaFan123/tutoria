# 📘 資料庫 Migration 操作流程（Alembic + SQLAlchemy）

適用於：Tutoria 專案（FastAPI + PostgreSQL + Docker + Alembic + Poetry）

---

## 📌 適用情境

- 新增資料表（例如 InviteCode）
- 修改現有欄位或新增欄位（例如 Teacher 新增 invite_code_id）
- 每次改動 SQLAlchemy Model 後，都要進行 migration

---

## 🧱 專案前置條件

- alembic/ 資料夾已初始化
- `env.py` 有設定 `target_metadata = Base.metadata`
- 使用 `poetry` 管理 Python 套件
- 使用 `docker compose` 啟動 backend（服務名為 `backend`）
- 所有 model 定義於 `app.models` 之下

---

## 🧪 操作流程

### 1️⃣ 修改或新增 SQLAlchemy Model

範例：新增 InviteCode table

```python
# app/models/invite_code.py
class InviteCode(Base):
    __tablename__ = "invite_code"
    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, index=True, nullable=False)
    is_used = Column(Boolean, default=False)
    teacher_id = Column(Integer, ForeignKey("teacher.id"))
    owner = relationship("Teacher", back_populates="invite_code")
```

並在 `Teacher` model 加上對應：

```python
# app/models/teacher.py
invite_code = relationship("InviteCode", back_populates="owner", cascade="all, delete")
```

---

### 2️⃣ 重新啟動 backend 服務

```bash
docker compose restart backend
```

---

### 3️⃣ 進入 backend container

```bash
docker compose exec backend bash
```

---

### 4️⃣ 產生 migration 檔案

```bash
poetry run alembic revision --autogenerate -m "Create invite_code table"
```

---

### 5️⃣ 檢查產出的版本檔案（可選）

路徑：`alembic/versions/xxxx_create_invite_code_table.py`

確認是否產生 `op.create_table(...)` 的指令。

---

### 6️⃣ 套用 migration 至資料庫

```bash
poetry run alembic upgrade head
```

### 確認目前 DB

```bash
poetry run alembic current
```

---

### 7️⃣ 驗證資料表

```bash
psql -U postgres -d tutoria
```

```sql
\dt                -- 查看所有表格
\d invite_code     -- 查看 invite_code 結構
```

---

## 🔁 進階指令速查

| 操作                           | 指令                              |
| ------------------------------ | --------------------------------- |
| 查看目前 schema 對應 revision  | `poetry run alembic current`      |
| 跳過 migration，直接標記為最新 | `poetry run alembic stamp head`   |
| 回朔上一版本                   | `poetry run alembic downgrade -1` |
| 清除所有 migration（重建用）   | 刪除 `alembic/versions/*`         |

---

## 🛠 設定檢查建議（初學者務必確認）

### 🔹 env.py 中要有：

```python
from app.db.base import Base
target_metadata = Base.metadata
```

### 🔹 若遇錯誤：`Can't locate revision identified by 'xxxx'`

請確保：

- 沒有多餘的舊版 migration 檔案
- 可以刪除 `alembic/versions/` 內所有檔案後重新產生

---

最後更新：2025-08-05

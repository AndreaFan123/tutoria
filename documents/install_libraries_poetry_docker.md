# 📦 如何在 Docker + Poetry 專案中新增 Python 套件

本專案使用 [Poetry](https://python-poetry.org/) 來管理 Python 套件，並透過 Docker 運行後端服務（FastAPI）。  
當你需要安裝新套件（例如 `python-jose`），請依照以下步驟操作，**避免手動 pip install 或進入容器操作**。

---

## ✅ 標準安裝流程

### Step 1️⃣：在主機上使用 Poetry 安裝套件

```bash
poetry add <套件名稱>
```

### Step 2️⃣：重新建構 Docker 容器

```bash
docker-compose build backend
```

或使用一行完成建構＋啟動：

```bash
docker-compose up -d --build
```

### Step 3️⃣：啟動（或重啟）容器

```bash
docker-compose up -d
```

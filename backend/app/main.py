from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.session import engine
from app.db.init_db import init_db
from app.models import user
from app.api.routes import auth

app = FastAPI(title="Tutoria API")

init_db()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])


@app.get("/")
def read_root():
    return {"message": "Welcome to tutoria API"}

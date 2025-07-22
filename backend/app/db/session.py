from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from app.core.config import settings

SQLALCHEMY_DATABASE_URL = settings.DATABASE_URL

engine = create_engine(settings.DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Dependency
def get_db() -> Session:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
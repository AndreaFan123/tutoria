from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.teacher import TeacherCreate, TeacherOut
from app.curd.teacher import create_teacher
from app.db.session import get_db
from app.models import Teacher

router = APIRouter()

@router.post("/auth/teacher/register", response_model=TeacherOut)
def register_teacher(teacher: TeacherCreate, db: Session = Depends(get_db)):
    # Check if account is existed
    existing = db.query(Teacher).filter(Teacher.email == teacher.email).first()
    if existing:
        raise HTTPException(status=400, detail="Email already registered")
    
    return create_teacher(db, teacher)
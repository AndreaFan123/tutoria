from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime

from app.models import Teacher, Student
from app.schemas.teacher import TeacherCreate, TeacherOut, TeacherLogin
from app.schemas.student import StudentCreate, StudentOut, StudentLogin
from app.schemas.token import Token
from app.crud.teacher import create_teacher, get_teacher_by_email, get_teacher_by_id
from app.crud.student import create_student, get_student_by_login_code
from app.core.security import verify_password, create_access_token
from app.db.session import get_db


router = APIRouter()


# Teacher
@router.post("/teacher/register", response_model=TeacherOut)
def register_teacher(teacher: TeacherCreate, db: Session = Depends(get_db)):
    # Check if account is existed
    existing = db.query(Teacher).filter(Teacher.email == teacher.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    return create_teacher(db, teacher)


@router.post("/teacher/login", response_model=Token)
def login_teacher(payload: TeacherLogin, db: Session = Depends(get_db)):
    teacher = get_teacher_by_email(db, payload.email)
    if not teacher or not verify_password(payload.password, teacher.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    teacher.last_login_at = datetime.utcnow()
    db.commit()
    
    token = create_access_token(subject=str(teacher.id))
    return {
        "access_token": token,
        "token_type": "bearer",
        "teacher_id": teacher.id,
    }

@router.get("/teacher/{teacher_id}", response_model=TeacherOut)
def get_teacher_info(teacher_id: int, db: Session = Depends(get_db)):
    teacher = get_teacher_by_id(db, teacher_id)
    if not teacher:
        raise HTTPException(status_code=404, detail="Teacher not found")
    return teacher

# Student
@router.post("/student/register", response_model=StudentOut)
def register_student(student: StudentCreate, db: Session = Depends(get_db)):
    existing = db.query(Student).filter(Student.login_code == student.login_code).first()
    if existing:
        raise HTTPException(status_code=400, detail="Login code already register")
    
    return create_student(db, student)

@router.post("/student/login", response_model=StudentOut)
def login_student(payload: StudentLogin, db: Session = Depends(get_db)):
    student = get_student_by_login_code(db, payload.login_code)
    if not student:
        raise HTTPException(status_code=400, detail="Invalid login code")
    return student
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.schemas.teacher import TeacherCreate, TeacherOut
from app.schemas.student import StudentCreate, StudentOut, StudentLogin
from app.crud.teacher import create_teacher
from app.crud.student import create_student, get_student_by_login_code
from app.db.session import get_db
from app.models import Teacher, Student

router = APIRouter()

@router.post("/auth/teacher/register", response_model=TeacherOut)
def register_teacher(teacher: TeacherCreate, db: Session = Depends(get_db)):
    # Check if account is existed
    existing = db.query(Teacher).filter(Teacher.email == teacher.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    return create_teacher(db, teacher)

@router.post("/auth/student/register", response_model=StudentOut)
def register_student(student: StudentCreate, db: Session = Depends(get_db)):
    existing = db.query(Student).filter(Student.login_code == student.login_code).first()
    if existing:
        raise HTTPException(status_code=400, detail="Login code already register")
    
    return create_student(db, student)

@router.post("/auth/student/login", response_model=StudentOut)
def login_student(payload: StudentLogin, db: Session = Depends(get_db)):
    student = get_student_by_login_code(db, payload.login_code)
    if not student:
        raise HTTPException(status_code=400, detail="Invalid login code")
    return student
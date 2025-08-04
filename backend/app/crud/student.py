from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models.student import Student
from app.models.teacher import Teacher
from app.schemas.student import StudentCreate

def get_student_by_login_code(db: Session, login_code: str) -> Student | None:
    return db.query(Student).filter(Student.login_code == login_code).first()

def create_student(db: Session, student: StudentCreate) -> Student:
    teacher = db.query(Teacher).filter(Teacher.invite_code == student.invite_code).first()
    if not teacher:
        raise HTTPException(status_code=400, detail="Invalid invite code")
    
    db_student = Student(
        name=student.name,
        login_code=student.login_code,
        invite_cde=student.invite_code
    )

    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student
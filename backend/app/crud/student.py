from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models.student import Student
from app.models.teacher import Teacher
from app.models.invite_code import InviteCode
from app.schemas.student import StudentCreate

def get_student_by_login_code(db: Session, login_code: str) -> Student | None:
    return db.query(Student).filter(Student.login_code == login_code).first()

def create_student(db: Session, student: StudentCreate) -> Student:
    invite_code = db.query(InviteCode).filter(
        InviteCode.code == student.invite_code,
        InviteCode.is_used == False
    ).first()

    if not invite_code:
        raise HTTPException(status_code=400, detail="Invalid or used invite code")
    
    db_student = Student(
        login_code=student.login_code,
        name=student.name,
        teacher_id=invite_code.teacher_id,
    )

    db.add(db_student)
    db.flush() 
    invite_code.student = db_student
    invite_code.is_used = True

    db.commit()
    db.refresh(db_student)
    return db_student

from sqlalchemy.orm import Session
from app.models.student import Student
from app.schemas.student import StudentCreate

def get_student_by_login_code(db: Session, login_code: str) -> Student | None:
    return db.query(Student).filter(Student.login_code == login_code).first()

def create_student(db: Session, student: StudentCreate) -> Student:
    db_student = Student(**student.dict())
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student
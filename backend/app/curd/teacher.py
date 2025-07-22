from sqlalchemy.orm import Session
from app.models import Teacher
from app.schemas.teacher import TeacherCreate
from app.core.security import get_password_hash

def create_teacher(db: Session, teacher: TeacherCreate) -> Teacher:
    db_teacher = Teacher(
        email=teacher.email,
        hashed_password=get_password_hash(teacher.password),
        full_name=teacher.full_name
    )
    db.add(db_teacher)
    db.commit()
    db.refresh(db_teacher)
    return db_teacher
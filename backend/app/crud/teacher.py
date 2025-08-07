from sqlalchemy.orm import Session
from app.models.teacher import Teacher, SubscriptionLevel
from app.models.invite_code import InviteCode
from app.schemas.teacher import TeacherCreate
from app.core.security import get_password_hash

def get_invite_code_quota(level: SubscriptionLevel) -> int:
    return {
        SubscriptionLevel.BASIC: 20,
        SubscriptionLevel.PRO: 40,
    }.get(level, 5)

def create_teacher(db: Session, teacher: TeacherCreate) -> Teacher:
    hashed_pw = get_password_hash(teacher.password)
    db_teacher = Teacher(
        email=teacher.email,
        hashed_password=hashed_pw,
        full_name=teacher.full_name,
        subscription_level=teacher.subscription_level,
    )
    db.add(db_teacher)
    db.flush()

    for _ in range(get_invite_code_quota(db_teacher.subscription_level)):
        db.add(InviteCode(teacher_id=db_teacher.id))
    
    db.commit()
    db.refresh(db_teacher)
    return db_teacher

def get_teacher_by_email(db: Session, email: str) -> Teacher | None:
    return db.query(Teacher).filter(Teacher.email == email).first()


def get_teacher_invite_codes(db: Session, teacher_id: int, only_unused: bool = False):
    query = db.query(InviteCode).filter(InviteCode.teacher_id == teacher_id)
    if only_unused:
        query = query.filter(InviteCode.is_used == False)
    return query.all()

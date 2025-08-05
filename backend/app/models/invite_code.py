from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base_class import Base
import secrets

class InviteCode(Base):
    __tablename__ = "invite_code"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, index=True, nullable=False, default=lambda: secrets.token_urlsafe(6))
    is_used = Column(Boolean, default=False)
    teacher_id = Column(Integer, ForeignKey("teacher.id"))
    owner = relationship("Teacher", back_populates="invite_codes")
    student_id = Column(Integer, ForeignKey("student.id"), nullable=True)
    student = relationship("Student", back_populates="used_invite_code", uselist=False)
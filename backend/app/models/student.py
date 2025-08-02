from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base_class import Base

class Student(Base):
    __tablename__ = "student"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    login_code = Column(String, unique=True, index=True, nullable=False)
    teacher_id = Column(Integer, ForeignKey("teacher.id"), nullable=False)

    teacher = relationship("Teacher", back_populates="students")
    lessons = relationship("Lesson", back_populates="student", cascade="all, delete-orphan")
    comments = relationship("Comment", back_populates="lesson", cascade="all, delete-orphan")
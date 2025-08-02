from sqlalchemy import Column, Integer, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db.base_class import Base

class Comment(Base):
    __tablename__="comment"

    id = Column(Integer, primary_key=True, index=True)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    student_id = Column(Integer, ForeignKey("student.id"), nullable=False)
    student = relationship("Student", back_populates="comments")
    lesson_id = Column(Integer, ForeignKey("lesson.id"), nullable=False)
    lesson = relationship("Lesson", back_populates="comments")
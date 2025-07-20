from sqlalchemy import Column, Integer, String, Text, Date, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base_class import Base

class Lesson(Base):
    __tablename__ = "lesson"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    date = Column(Date, nullable=False)
    content = Column(Text, nullable=True)
    audio_url = Column(String, nullable=True)
    attachment_url = Column(String, nullable=True)

    student_id = Column(Integer, ForeignKey("student.id"), nullable=False)
    student = relationship("Student", back_populates="lessons")
    comments = relationship("Comment", back_populates="lesson")
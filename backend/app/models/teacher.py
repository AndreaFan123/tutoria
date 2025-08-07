from sqlalchemy import Column, Integer, String, Enum, DateTime, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db.base_class import Base

import secrets
import enum

class SubscriptionLevel(str, enum.Enum):
    FREE = "free"
    BASIC = "basic"
    PRO = "pro"

class Teacher(Base):
    __tablename__ = "teacher"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String, nullable=True)
    subscription_level = Column(Enum(SubscriptionLevel), default=SubscriptionLevel.FREE, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    last_login_at = Column(DateTime, nullable=True)
    is_active = Column(Boolean, default=True, nullable=False)
    
    students = relationship("Student", back_populates="teacher")
    invite_codes = relationship("InviteCode", back_populates="owner", cascade="all, delete")

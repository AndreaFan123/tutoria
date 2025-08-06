from typing import List
from pydantic import BaseModel, EmailStr, constr
from typing import Optional
from app.schemas.invite_code import InviteCodeOut
from app.models.teacher import SubscriptionLevel

# Register
class TeacherCreate(BaseModel):
    email: EmailStr
    password: constr(min_length=6)
    full_name: Optional[str] = None
    subscription_level: SubscriptionLevel = SubscriptionLevel.FREE

# Login
class TeacherLogin(BaseModel):
    email: EmailStr
    password: str

# Response
class TeacherOut(BaseModel):
    id: int
    email: EmailStr
    full_name: Optional[str]
    subscription_level: SubscriptionLevel
    invite_codes: List[InviteCodeOut] = []

    class Config:
        orm_mode = True
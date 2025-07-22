from pydantic import BaseModel, EmailStr, constr
from typing import Optional

# Register
class TeacherCreate(BaseModel):
    email: EmailStr
    password: constr(min_length=6)
    full_name: Optional[str] = None

# Login
class TeacherLogin(BaseModel):
    email: EmailStr
    password: str

# Response
class TeacherOut(BaseModel):
    id: int
    email: EmailStr
    full_name: Optional[str]

    class Config:
        orm_mode = True
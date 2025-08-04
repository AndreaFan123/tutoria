from pydantic import BaseModel, constr
from typing import Optional

class StudentCreate(BaseModel):
    name: str
    login_code: constr(min_length=4)
    invite_code: str

class StudentLogin(BaseModel):
    login_code: constr(min_length=4)

class StudentOut(BaseModel):
    id: int
    name: str
    login_code: str
    teacher_id: int

    class Config:
        orm_mode = True
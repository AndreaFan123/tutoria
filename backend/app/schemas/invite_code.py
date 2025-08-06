from pydantic import BaseModel

class InviteCodeOut(BaseModel):
    id: int
    code: str
    is_used: bool

    class Config:
        orm_mode = True

from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func
from app.database.db import Base

class Result(Base):
    __tablename__ = "results"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    total_questions = Column(Integer)
    correct = Column(Integer)
    wrong = Column(Integer)
    blank = Column(Integer)
    score = Column(String)
    taken_at = Column(DateTime, default=func.now())
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.db import get_db
from app.models.question import Question
from pydantic import BaseModel
from typing import Optional

router = APIRouter()

class QuestionCreate(BaseModel):
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    correct_option: int
    category: Optional[str] = "general"

@router.get("/")
def get_questions(db: Session = Depends(get_db)):
    questions = db.query(Question).all()
    return questions

@router.get("/{question_id}")
def get_question(question_id: int, db: Session = Depends(get_db)):
    question = db.query(Question).filter(Question.id == question_id).first()
    if not question:
        raise HTTPException(status_code=404, detail="Question not found")
    return question

@router.post("/")
def create_question(request: QuestionCreate, db: Session = Depends(get_db)):
    question = Question(
        question_text=request.question_text,
        option_a=request.option_a,
        option_b=request.option_b,
        option_c=request.option_c,
        option_d=request.option_d,
        correct_option=request.correct_option,
        category=request.category
    )
    db.add(question)
    db.commit()
    db.refresh(question)
    return question

@router.delete("/{question_id}")
def delete_question(question_id: int, db: Session = Depends(get_db)):
    question = db.query(Question).filter(Question.id == question_id).first()
    if not question:
        raise HTTPException(status_code=404, detail="Question not found")
    db.delete(question)
    db.commit()
    return {"message": "Question deleted successfully"}
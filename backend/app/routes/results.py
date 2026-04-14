from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.db import get_db
from app.models.result import Result
from pydantic import BaseModel

router = APIRouter()

class ResultCreate(BaseModel):
    user_id: int
    total_questions: int
    correct: int
    wrong: int
    blank: int
    score: str

@router.post("/")
def save_result(request: ResultCreate, db: Session = Depends(get_db)):
    result = Result(
        user_id=request.user_id,
        total_questions=request.total_questions,
        correct=request.correct,
        wrong=request.wrong,
        blank=request.blank,
        score=request.score
    )
    db.add(result)
    db.commit()
    db.refresh(result)
    return result

@router.get("/{user_id}")
def get_results(user_id: int, db: Session = Depends(get_db)):
    results = db.query(Result).filter(Result.user_id == user_id).all()
    if not results:
        raise HTTPException(status_code=404, detail="No results found")
    return results

@router.get("/")
def get_all_results(db: Session = Depends(get_db)):
    results = db.query(Result).all()
    return results
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.db import Base, engine
from app.routes import auth, questions, results

Base.metadata.create_all(bind=engine)

app = FastAPI(title="MCQ Exam System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(questions.router, prefix="/questions", tags=["Questions"])
app.include_router(results.router, prefix="/results", tags=["Results"])

@app.get("/")
def root():
    return {"message": "MCQ Exam System API is running"}
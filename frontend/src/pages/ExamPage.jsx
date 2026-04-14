import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api/axios";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";

export default function ExamPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    API.get("/questions/").then((res) => {
      setQuestions(res.data);
      setLoading(false);
    });
  }, []);

  const handleSelect = (qIndex, optIndex) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleSubmit = async () => {
    let correct = 0;
    let blank = 0;
    questions.forEach((q, i) => {
      if (answers[i] === undefined) {
        blank++;
      } else if (answers[i] === q.correct_option) {
        correct++;
      }
    });
    const wrong = questions.length - correct - blank;
    const score = ((correct / questions.length) * 100).toFixed(2);
    const result = {
      user_id: 1,
      total_questions: questions.length,
      correct,
      wrong,
      blank,
      score,
    };
    await API.post("/results/", result);
    navigate("/result", { state: result });
  };

  const answeredCount = Object.keys(answers).length;
  const progressPercent = questions.length > 0
    ? Math.round((answeredCount / questions.length) * 100)
    : 0;

  if (loading) return <div className="loading">Loading Questions...</div>;

  return (
    <div className="exam-container">
      <Timer duration={1800} onTimeUp={handleSubmit} />
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className="progress-text">
        {answeredCount} of {questions.length} questions answered
      </p>
      <div className="questions-list">
        {questions.map((q, i) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={i}
            selected={answers[i]}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <div className="submit-container">
        <button className="submit-btn" onClick={handleSubmit}>
          Submit Exam
        </button>
      </div>
    </div>
  );
}
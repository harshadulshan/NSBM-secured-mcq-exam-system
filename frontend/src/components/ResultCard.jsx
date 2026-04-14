export default function ResultCard({ result }) {
  const score = parseFloat(result.score);

  const getGrade = () => {
    if (score >= 80) return { letter: "A", className: "grade-a", label: "Excellent" };
    if (score >= 65) return { letter: "B", className: "grade-b", label: "Good" };
    if (score >= 50) return { letter: "C", className: "grade-c", label: "Average" };
    return { letter: "F", className: "grade-f", label: "Failed" };
  };

  const grade = getGrade();

  return (
    <div className="result-card">
      <h2>Exam Result</h2>
      <div className={`result-grade ${grade.className}`}>
        {grade.letter}
        <span style={{ fontSize: "18px", marginLeft: "10px", opacity: 0.8 }}>
          {grade.label}
        </span>
      </div>
      <div className="result-item">
        <span>Total Questions</span>
        <span>{result.total_questions}</span>
      </div>
      <div className="result-item">
        <span>Correct</span>
        <span className="correct">{result.correct}</span>
      </div>
      <div className="result-item">
        <span>Wrong</span>
        <span className="wrong">{result.wrong}</span>
      </div>
      <div className="result-item">
        <span>Blank</span>
        <span className="blank">{result.blank}</span>
      </div>
      <div className="result-item">
        <span>Score</span>
        <span className="score">{result.score}%</span>
      </div>
    </div>
  );
}
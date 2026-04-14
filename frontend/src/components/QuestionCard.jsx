export default function QuestionCard({ question, index, selected, onSelect }) {
  return (
    <div className="question-card">
      <p className="question-text">
        {index + 1}. {question.question_text}
      </p>
      <div className="options">
        {["option_a", "option_b", "option_c", "option_d"].map((opt, j) => (
          <label key={j} className={`option-label ${selected === j ? "selected" : ""}`}>
            <input
              type="radio"
              name={`q${index}`}
              value={j}
              checked={selected === j}
              onChange={() => onSelect(index, j)}
            />
            {question[opt]}
          </label>
        ))}
      </div>
    </div>
  );
}
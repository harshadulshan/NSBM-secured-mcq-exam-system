import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state;

  if (!result) {
    navigate("/");
    return null;
  }

  return (
    <div className="result-container">
      <ResultCard result={result} />
      <button className="home-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}
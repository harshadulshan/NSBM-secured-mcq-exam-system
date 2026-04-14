import { useState, useEffect } from "react";

export default function Timer({ duration, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const color = timeLeft < 300 ? "#ff4444" : "#09ff00";

  return (
    <div className="timer" style={{ color }}>
      Time Left: {minutes}:{seconds < 10 ? "0" + seconds : seconds}
    </div>
  );
}
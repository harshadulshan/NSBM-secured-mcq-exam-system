import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api/axios";

export default function AdminPage() {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState({
    question_text: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    correct_option: 0,
    category: "general",
  });
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.is_admin) {
      navigate("/");
      return;
    }
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    API.get("/questions/").then((res) => setQuestions(res.data));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    await API.post("/questions/", {
      ...form,
      correct_option: parseInt(form.correct_option),
    });
    fetchQuestions();
    setForm({
      question_text: "",
      option_a: "",
      option_b: "",
      option_c: "",
      option_d: "",
      correct_option: 0,
      category: "general",
    });
  };

  const handleDelete = async (id) => {
    await API.delete(`/questions/${id}`);
    fetchQuestions();
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <div className="admin-form">
        <h3>Add New Question</h3>
        <input name="question_text" placeholder="Question" value={form.question_text} onChange={handleChange} />
        <input name="option_a" placeholder="Option A" value={form.option_a} onChange={handleChange} />
        <input name="option_b" placeholder="Option B" value={form.option_b} onChange={handleChange} />
        <input name="option_c" placeholder="Option C" value={form.option_c} onChange={handleChange} />
        <input name="option_d" placeholder="Option D" value={form.option_d} onChange={handleChange} />
        <select name="correct_option" value={form.correct_option} onChange={handleChange}>
          <option value={0}>Option A is Correct</option>
          <option value={1}>Option B is Correct</option>
          <option value={2}>Option C is Correct</option>
          <option value={3}>Option D is Correct</option>
        </select>
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <button onClick={handleAdd}>Add Question</button>
      </div>
      <div className="admin-questions">
        <h3>All Questions ({questions.length})</h3>
        {questions.map((q, i) => (
          <div key={q.id} className="admin-question-item">
            <p>{i + 1}. {q.question_text}</p>
            <button className="delete-btn" onClick={() => handleDelete(q.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
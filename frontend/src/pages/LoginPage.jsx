import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api/axios";
import logo from "../assets/logo.png";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }
    try {
      if (isRegister) {
        await API.post("/auth/register", { username, password });
        setSuccess("Account created successfully. Please login.");
        setIsRegister(false);
        setUsername("");
        setPassword("");
      } else {
        const res = await API.post("/auth/login", { username, password });
        login(
          { username, is_admin: res.data.is_admin },
          res.data.access_token
        );
        if (res.data.is_admin) {
          navigate("/admin");
        } else {
          navigate("/exam");
        }
      }
    } catch (err) {
      setError(err.response?.data?.detail || "Something went wrong");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="logo" className="login-logo" />
        <h2>{isRegister ? "Create Account" : "Welcome Back"}</h2>
        <p className="subtitle">
          {isRegister
            ? "Register to access the exam system"
            : "Login to start your exam"}
        </p>
        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>
          {isRegister ? "Register" : "Login"}
        </button>
        <p className="toggle-text">
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => { setIsRegister(!isRegister); setError(""); setSuccess(""); }}>
            {isRegister ? " Login" : " Register"}
          </span>
        </p>
      </div>
    </div>
  );
}
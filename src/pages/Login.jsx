import React, { useState } from "react";
import { login, saveAuth } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await login({ email, password });

    if (res.token) {
      saveAuth(res.token, res.user);
      navigate("/");
    } else {
      alert(res.message || "Invalid credentials");
    }
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="form-btn" type="submit">
          Login
        </button>

        <div style={{ marginTop: 18, textAlign: "center" }}>
          <span style={{ color: "#555" }}>Don't have an account? </span>
          <a href="/signup" className="store-link">
            Signup
          </a>
        </div>
      </form>
    </div>
  );
}

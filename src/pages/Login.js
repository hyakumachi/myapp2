import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const realUsername = "admin";
  const realPassword = "adpw";
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(`Hello, ${username}`);
  }, [username]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === realUsername && password === realPassword) {
      alert("Logged in Successfully");
    } else {
      alert("Login Error!");
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <h2>{title}</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            required
            maxLength={20}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            required
            maxLength={20}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
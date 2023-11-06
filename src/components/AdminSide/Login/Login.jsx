import React, { useState } from "react";
import "./login.scss";
import Admin from "../Admin";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "admin@gmail.com" && password === "password123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <p>Only admin can login</p>
          </form>
        </div>
      ) : (
        <Admin />
      )}
    </div>
  );
}

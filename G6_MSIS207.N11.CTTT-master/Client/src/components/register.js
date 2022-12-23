import React from "react";
import "./register.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const req = await fetch("http://localhost:2000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    alert("Register Success");
    const data = await req.json();
  };

  return (
    <div className="cover">
      <div className="log-name">Register</div>

      <form onSubmit={handleRegister}>
        <input
          className="ip-reg"
          type="name"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          className="ip-reg"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          className="ip-reg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button className="login-name-reg" onClick={handleRegister}>
          Submit
        </button>

        <div className="no-account1">
          Go back to
          <NavLink to="/login" className="sign-up1" onClick={this}>
            Login Page
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;

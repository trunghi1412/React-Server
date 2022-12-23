import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./login.css";
let dataUser = {
  name: String,
  password: String,
};
const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    dataUser = {
      name: name,
      password: password,
    };
    console.log(dataUser);
    e.preventDefault();
    fetch("http://localhost:2000/api/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "ok") {
          history.replace("/homepage");
          alert(res.message);
        } else {
          console.log(res.status);
          alert("Wrong usename or password !");
        }
      });
  };

  return (
    <div className="cover">
      <div className="log-name">Login</div>

      <form onSubmit={handleLogin}>
        <input
          className="ip-reg"
          type="text"
          placeholder="UserName"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

        <button type="submit" className="login-name-reg">
          Submit
        </button>

        <div className="no-account2">
          Don't have account ?
          <NavLink to="/register" className="sign-up2" onClick={this}>
            Sign Up Here
          </NavLink>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", { name, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          console.log("Login Success");
          navigate("/home")
        } else {
          alert("incorrect password, Please try again");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>SignIn</h1>
        <label>Enter Username</label>
        <input
          className="input"
          type="text"
          onChange={(event) => setName(event.target.value)}
          style={{ width: "20rem", height: "2rem" }}
          autoFocus
          required
        />
        <br />
        <br />
        <br />
        <label>
          <strong>Enter PassWord</strong>
        </label>
        <input
          className="input"
          type="password"
          onChange={(event)=> setPassword(event.target.value)}
          style={{ width: "20rem", height: "2rem" }}
          required
        />
        <br />
        <br />
        <br />
          <button type="submit">Enter</button>
      </form>
    </div>
  );
}
export default SignIn;

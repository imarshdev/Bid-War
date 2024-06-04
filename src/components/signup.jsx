import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, password })
      .then((result) => {
        console.log(result);
        if (result.data === "already a bidder") {
          alert("Bidder exists");
          navigate("/signin");
        } else {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>SignUp</h1>
        <label>Set Username</label>
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
        <label>Set PassCode</label>
        <input
          className="input"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          style={{ width: "20rem", height: "2rem" }}
          required
        />
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default SignUp;

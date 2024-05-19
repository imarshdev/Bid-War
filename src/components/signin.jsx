import React, { useState } from "react";
import { Link } from "react-router-dom";


function SignIn() {
  const [userName, setUserName] = useState('')

  const handleName = (event) => {
    setUserName(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>SignIn</h1>
        <label>Enter Username</label>
        <input
          className="input"
          type="text"
          value={userName}
          onChange={handleName}
          style={{ width: "20rem", height: "2rem" }}
          autoFocus
        />
        <br />
        <br />
        <br />
        <label>Enter PassCode</label>
        <input
          className="input"
          type="password"
          style={{ width: "20rem", height: "2rem" }}
        />
        <br />
        <br />
        <br />
        <Link to="/home">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
}
export default SignIn;

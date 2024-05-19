import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container">
      <form className="form">
        <h1>SignUp</h1>
        <label>Set Username</label>
        <input
          className="input"
          type="text"
          style={{ width: "20rem", height: "2rem" }}
          autoFocus
        />
        <br />
        <br />
        <br />
        <label>Set PassCode</label>
        <input
          className="input"
          type="password"
          style={{ width: "20rem", height: "2rem" }}
        />
        <br />
        <br />
        <br />
        <Link to="/home">
          <button>Submit</button>
        </Link>
      </form>
    </div>
  );
}
export default SignUp;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {


  return (
    <div className="container">
      <form className="form">
        <h1>Hello there!</h1>
        <p>Welcome to BidWar</p>
        <br />
        <div
          style={{
            width: "22rem",
            height: "3rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/signin">
            <button className="open">SignIn</button>
          </Link>
          <Link to="/signup">
            <button className="open">SignUp</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
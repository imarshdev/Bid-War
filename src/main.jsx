import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./components/landing.jsx";
import SignIn from "./components/signin.jsx";
import SignUp from "./components/signup.jsx";
import MainPage from "./components/mainpage.jsx";
import NotFond from "./components/notfound.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path="landing" element={<Landing />} />
        <Route path="signin" element={<SignIn/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="home" element={<MainPage />} />
        <Route path="notfound" element={<NotFond/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import { Button } from "@mui/material";
import React, { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import logo from "../../assets/svg/signupLogo.svg";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Header logo={true} />
      <div className="signup_body">
        <div className="signup__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="signup__input">
          <input
            value={username}
            placeholder="Submit username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="signup__input">
          <input
            value={password}
            type="password"
            placeholder="Submit password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="search__buttons">
          <Button
            className="btn btn_primary"
            type="submit"
            // onClick={() => navigate("/signup")}
            variant="outlined"
          >
            Signup
          </Button>
          <Button
            className="btn btn_dark"
            onClick={() => navigate("/login")}
            variant="outlined"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = ({ userName, setUserName }) => {
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join to our chat </h1>
        <div>
          <input
            placeholder="Enter your name"
            className="joinInput"
            type="text"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>

        <Link
          onClick={(e) => (!userName ? e.preventDefault() : null)}
          to="/chat"
        >
          <button className={"button mt-20"} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
export default function Signup() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="signupTab">
        <img src="Meetup_Logo1.png" className="signupLogo"></img>
        <h1>Sign up</h1>
        <p>Already a member? 
         <Link to={"login"}> <span>Log in</span></Link>
        </p>
        <button className="btn">
          <i
            className="fa-brands fa-facebook-f"
            style={{ color: "#155cd5" }}
          ></i>
          Continue with facebook
        </button>
        <button className="btn">
          <i className="fa-brands fa-google" style={{ color: "#ec1313" }}></i>
          Continue with Google
        </button>
        <button className="btn">
          <i className="fa-brands fa-apple" style={{ color: "#111212" }}></i>
          Continue with Apple
        </button>
        <Link to={"Esignup"} style={{ textDecorationLine: "none" }}>
          <button
            className="btn"
            // data-toggle="modal"
            // data-target="#signupModal"
          >
            <i
              className="fa-solid fa-envelope"
              style={{ color: "#6e7072" }}
            ></i>
            Sign up with email
          </button>
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="meetuplogo.svg"
              alt="meetup.com"
              className="logoImg"
            ></img>
          </a>
          <div className="navOptions">
            <i className="fa-solid fa-globe me-2"></i>
            <span className="me-2">English</span>
            <button className="logIn">Log in</button>
            <button className="signIn">Sign up</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

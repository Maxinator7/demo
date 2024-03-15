import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import SignupModal from "../SignupModal/SignupModal";
import { useSelector } from "react-redux";
export default function Navbar() {
  const { user } = useSelector((store) => store.MeetupData);
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="meetuplogo.svg" alt="meetupcom" className="logoImg"></img>
          </a>
          {user.length <= 0 && (
            <div className="navOptions">
              <i className="fa-solid fa-globe me-2"></i>
              <span className="me-2">English</span>
              <button
                type="button"
                className="logIn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Log in
              </button>
              <button
                className="signIn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Sign up
              </button>
            </div>
          )}

          {user.length > 0 && <h1>Welcome {user}</h1>}
        </div>
      </nav>

      {/* ======= signup=================== */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="crossBtn">
              {" "}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <SignupModal />
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <LoginModal />
          </div>
        </div>
      </div>
      {/* ==================================Login=========================== */}
      <div
        class="modal fade"
        id="signupModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="signupModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {/* <!-- Sign Up form goes here --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

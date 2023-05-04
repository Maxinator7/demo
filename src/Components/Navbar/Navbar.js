import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
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
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="signupTab">
              <img src="Meetup_Logo1.png" className="signupLogo"></img>
              <h1>Sign up</h1>
              <p>Already a member? Log in</p>
              <button className="btn">
                <i
                  className="fa-brands fa-facebook-f"
                  style={{ color: "#155cd5" }}
                ></i>
                Continue with facebook
              </button>
              <button className="btn">
                <i
                  className="fa-brands fa-google"
                  style={{ color: "#ec1313" }}
                ></i>
                Continue with Google
              </button>
              <button className="btn">
                <i
                  className="fa-brands fa-apple"
                  style={{ color: "#111212" }}
                ></i>
                Continue with Apple
              </button>
              <Link to={"/signup"} style={{textDecorationLine:"none"}}>
                <button
                  className="btn"
                  data-target="#myModal"
                  data-toggle="modal"
                  //data-target="#signupModal"
                  data-keyboard="false"
                  data-bs-dismiss="modal"
                  aria-label="Close"
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
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body border border-secondary">
              <div className="loginmodel">
                <img src="Meetup_Logo1.png" className="signupLogo"></img>
                <h1>Log in</h1>
                <p>
                  Not a member yet ?
                  <span className="text-primary"> Sign up</span>
                </p>
                <form>
                  <div class="form-group mt-4">
                    <label
                      style={{ fontWeight: "bolder" }}
                      for="formGroupExampleInput2"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div class="form-group mt-4">
                    <label
                      className="d-flex justify-content-between"
                      for="formGroupExampleInput"
                    >
                      <div style={{ fontWeight: "bolder" }}>Password</div>
                      <div className="text-primary">Forgot password</div>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Enter Password"
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <button className="logInBtn">Log in</button>

                    <h6>
                      ----------------------------------- or
                      -----------------------------------
                    </h6>

                    <button className="btn">
                      <i
                        className="fa-brands fa-facebook-f"
                        style={{ color: "#155cd5" }}
                      ></i>
                      Continue with facebook
                    </button>
                    <button className="btn">
                      <i
                        className="fa-brands fa-google"
                        style={{ color: "#ec1313" }}
                      ></i>
                      Continue with Google
                    </button>
                    <button className="btn">
                      <i
                        className="fa-brands fa-apple"
                        style={{ color: "#111212" }}
                      ></i>
                      Continue with Apple
                    </button>

                    <button className="btn">
                      {" "}
                      <h6 className="text-primary">Issues with log in ?</h6>
                    </button>
                  </div>
                </form>
              </div>
            </div>
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

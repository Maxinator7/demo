import React from "react";
import "./EmailSignup.css";

function EmailSignup() {
  return (
    <div className="emailSignup">
      {/* <div>
        {" "}
        <button>back</button>
      </div> */}
      <h1>Finish Signing up</h1>
      <form>
        <div className="form-group mt-4">
          <label className="mt-2" for="formGroupExampleInput">
            Your Name
          </label>
          <input
            type="text"
            className="form-control mt-2"
            id="formGroupExampleInput"
            placeholder="Enter your Name"
          />
        </div>
        <div className="form-group">
          <label className="mt-2" for="formGroupExampleInput2">
            Email address
          </label>
          <input
            type="text"
            className="form-control mt-2"
            id="formGroupExampleInput2"
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-group">
          <label className="mt-2" for="formGroupExampleInput">
            Password
          </label>
          <input
            type="text"
            className="form-control mt-2"
            id="formGroupExampleInput"
            placeholder="Enter Password"
          />
        </div>
        <div className="input-group mb-3 w-50 ">
          <span
            className="input-group-text mt-4"
            id="inputGroup-sizing-default"
          >
            {" "}
            <i
              className="fa-sharp fa-solid fa-location-dot"
              style={{ color: "#c1c7d2" }}
            ></i>
          </span>
          <input
            type="text"
            className="form-control mt-4"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Neighbourhood or City or Zip"
          />
        </div>
        <p>Age</p>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="invalidCheck"
          required
        />
        <label className="form-check-label mt-2" for="invalidCheck">
          I am 18 years of age or older.
        </label>

        <div className="form-check mb-2 mr-sm-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineFormCheck"
          />
          <label className="form-check-label mt-2" for="inlineFormCheck">
            Remember me
          </label>
        </div>
        <button>Sign up</button>

        <p>
          By signing up, you agree to Terms of Service, Privacy Policy, and
          Cookie Policy.
        </p>

        <h6>Already a member? Log in</h6>
      </form>
    </div>
  );
}
export default EmailSignup;

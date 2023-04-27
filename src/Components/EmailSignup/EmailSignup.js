import React from "react";
import "./EmailSignup.css";

function EmailSignup() {
  return (
    <div className="emailSignup">
      <div>
        {" "}
        <button>back</button>
      </div>
      <h1>Finish Signing up</h1>
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Your Name</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter your Name"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Email address</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter your email address"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Password</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Password"
          />
        </div>
        <div class="input-group mb-3 w-50 ">
          <span class="input-group-text" id="inputGroup-sizing-default">
            {" "}
            <i
              class="fa-sharp fa-solid fa-location-dot"
              style={{ color: "#c1c7d2" }}
            ></i>
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Neighbourhood or City or Zip"
          />
        </div>
        <p>Age</p>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="invalidCheck"
          required
        />
        <label class="form-check-label" for="invalidCheck">
          I am 18 years of age or older.
        </label>

        <div class="form-check mb-2 mr-sm-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineFormCheck"
          />
          <label class="form-check-label" for="inlineFormCheck">
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

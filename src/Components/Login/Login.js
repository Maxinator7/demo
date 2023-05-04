import React from 'react'

export default function login() {
  return (
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
  )
}

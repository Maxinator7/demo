import React, { useState } from "react";
import validator from "validator";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import usersLogin from "../../Services/usersLogin";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../Reducer/redux";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginemail, setloginEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();

    // validate form data
    const errors = {};

    if (!loginemail) {
      errors.email = "Email is required";
    } else if (!validator.isEmail(loginemail)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (!validator.isAlphanumeric(password)) {
      errors.password = "Password should be Alphanumeric";
    } else if (password.length < 8) {
      errors.password = "Password length must be at least 8";
    }

    setErrors(errors);
    // submit form data if no errors
    if (Object.keys(errors).length === 0) {
      usersLogin({
        email: loginemail,
        password: password,
      })
        .then(function (response) {

          console.log( " status is : => "+ response.status);
          if (response.status === 200) {
            dispatch(handleLogin(loginemail));

           

            alert("Login Successful");
          }else{
            alert("User not found Please try logging in with valid credentials");
          
              navigate("login");
          }
        })
        .catch(function (error) {
          console.log(error);

          console.log("login catch blockkkk");
        });

      setloginEmail("");
      setPassword("");
    }
  };

  return (
    <div className="loginmodel">
      <img
        src="Meetup_Logo1.png"
        alt="meetup logo"
        className="signupLogo"
      ></img>
      <h1>Log in</h1>
      <p>
        Not a member yet ?{" "}
        <Link to="Signup">
          <span className="text-primary"> Sign up</span>
        </Link>
      </p>
      <form onSubmit={handleSubmit}>
        <div class="form-group mt-4">
          <label style={{ fontWeight: "bolder" }} for="formGroupExampleInput2">
            Email address
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter your email address"
            value={loginemail}
            onChange={(event) => setloginEmail(event.target.value)}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
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
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && (
            <span className="text-danger">{errors.password}</span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <button className="logInBtn" type="submit">
            Log in
          </button>

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
            <i className="fa-brands fa-google" style={{ color: "#ec1313" }}></i>
            Continue with Google
          </button>
          <button className="btn">
            <i className="fa-brands fa-apple" style={{ color: "#111212" }}></i>
            Continue with Apple
          </button>

          <button className="btn">
            {" "}
            <h6 className="text-primary">Issues with log in ?</h6>
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;

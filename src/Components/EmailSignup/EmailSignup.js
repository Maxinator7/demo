import React, { useState } from "react";
import validator from "validator";
import "./EmailSignup.css";
import { Link } from "react-router-dom";
import usersSignup from "../../Services/usersSignup";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const EmailSignup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  // dispatch(handleLogin({name:name,value:value}))

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate form data
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!validator.isEmail(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (!validator.isAlphanumeric(password)) {
      errors.password = "Password should be Alphanumeric";
    } else if (password.length < 8) {
      errors.password = "Password length must be at least 8";
    }
    if (!location) {
      errors.location = "Location is required";
    } else if (!validator.isAlpha(location)) {
      errors.location = "Enter Valid location";
    }
    setErrors(errors);
    // submit form data if no errors
    if (Object.keys(errors).length === 0) {
      usersSignup({
        name: name,
        email: email,
        password: password,
        location: location,
      })
        .then(function (response) {
          console.log(response.data.token);
          setEmail("");
          setLocation("");
          setName("");
          setPassword("");

          navigate("/login");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="emailSignup">
      <h1 className="mt-4 text-bold">Finish signing up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-4 d-flex flex-column">
          <label className="form-check-label mt-2" htmlFor="name">
            <h5>Your name</h5>
          </label>

          <input
            type="text"
            id="name"
            className="form-control "
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </div>
        <div className="form-group mt-4 d-flex flex-column">
          <label className="form-check-label mt-2" htmlFor="email">
            <h5>Email address</h5>
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="example@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <p>We’ll use your email address to send you updates</p>
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="form-group mt-4 d-flex flex-column">
          <label className="form-check-label mt-2" htmlFor="email">
            <h5>Password</h5>
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && (
            <span className="text-danger">{errors.password}</span>
          )}
        </div>
        <div className="form-group mt-4 d-flex flex-column">
          <label className="form-check-label mt-2" htmlFor="location">
            <h5>Location</h5>
          </label>
          <input
            type="text"
            id="location"
            className="form-control"
            placeholder="Bengaluru,IN"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          {errors.location && (
            <span className="text-danger">{errors.location}</span>
          )}
        </div>
        <h5 className="mt-4">Age</h5>
        <div className="d-flex align-items-center gap-2 mt-2">
          <input
            className="form-check-input "
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label className="form-check-label mt-2" for="invalidCheck">
            I am 18 years of age or older.
          </label>
        </div>

        <div className="d-flex align-items-center gap-2 mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineFormCheck"
          />
          <label className="form-check-label mt-2" for="inlineFormCheck">
            I'm not a robot
          </label>
        </div>
        <button className="submitbtn" type="submit">
          Signup
        </button>
      </form>
      <p className="text-center w-75">
        By signing up, you agree to Terms of Service, Privacy Policy, and Cookie
        Policy.
      </p>

      <h6>
        Already a member?
        <Link to={"/login"}>
          <span className="text-primary">Log in</span>
        </Link>
      </h6>
    </div>
  );
};
export default EmailSignup;

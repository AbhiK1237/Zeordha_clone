import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message, token } = data;

      if (success) {
        handleSuccess(message);
        Cookies.set("Token", token);
        setTimeout(() => {
          navigate("/");
        }, 250);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container text-center d-flex justify-content-center p-5  ">
      <div
        className="signup-box border border-black"
        style={{
          width: "40%",
          borderRadius: "8px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <h2 className="my-5">Signup Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="row d-flex justify-content-center mb-5">
            <label
              htmlFor="email"
              className="pt-1 fs-5 fw-normal"
              style={{ width: "80px" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              style={{
                width: "18rem",
                marginLeft: "2.5rem",
                height: "2.5rem",
                border: "1px solid black",
                borderRadius: "8px",
              }}
              required
            />
          </div>
          <div className="row d-flex justify-content-center mb-5">
            <label
              htmlFor="username"
              className="pt-1 fs-5 fw-normal"
              style={{ width: "80px" }}
            >
              Username
            </label>

            <input
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              style={{
                width: "18rem",
                marginLeft: "2.5rem",
                height: "2.5rem",
                border: "1px solid black",
                borderRadius: "8px",
              }}
              required
            />
          </div>
          <div className="row d-flex justify-content-center mb-5">
            <label
              htmlFor="password"
              className="pt-1 fs-5 fw-normal"
              style={{ width: "80px" }}
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              style={{
                width: "18rem",
                marginLeft: "2.5rem",
                height: "2.5rem",
                border: "1px solid black",
                borderRadius: "8px",
              }}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary mb-3"
            style={{ width: "10rem", borderRadius: "8px" }}
          >
            Sign up
          </button>
          <p className="mb-5">
            Already have an account?{" "}
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

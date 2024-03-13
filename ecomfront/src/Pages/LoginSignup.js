import React from "react";
import { useState } from "react";
import "./CSS/LoginSignup.css";
function LoginSignup() {
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    usename: "",
    password: "",
    email: "",
  });

  const changeHendler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Login = async () => {
    console.log("login function executed", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "Application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((Response) => Response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const Signup = async () => {
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "Application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((Response) => Response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <diV className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              name="usename"
              value={formData.usename}
              onChange={changeHendler}
              type="text"
              placeholder="Your name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHendler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHendler}
            type="password"
            placeholder="password"
          />
        </diV>
        <button
          onClick={() => {
            state === "Login" ? Login() : Signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an accounts?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing ,I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;

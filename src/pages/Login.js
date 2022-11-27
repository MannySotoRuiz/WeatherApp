import React, { useState } from "react";
import '../login.css';
import { useNavigate } from 'react-router-dom';

export default function (props) {
    let authMode = "signin";
    let navigate = useNavigate();

    const changeToSignUpMode = () => {
      localStorage.setItem("authMode", JSON.stringify("signup"));
      window.location.reload();
    }
    
    const changeToLoginMode = () => {
      localStorage.setItem("authMode", JSON.stringify("signin"));
      window.location.reload();
    }

    let getAuth = JSON.parse(localStorage.getItem("authMode"));
    if (!getAuth){
      localStorage.setItem("authMode", JSON.stringify(authMode));
    }
    else{
      authMode = getAuth;
    }

    const [loginemail, setloginemail] = useState("");
    const [loginpass, setloginpass] = useState ("");
    const [signupemail, setsignupemail] = useState ("");
    const [signuppass, setsignuppass] = useState ("");

    const handleLoginEmailChange = (event) => {
      setloginemail(event.currentTarget.value);
    };

    const handleLoginPassChange = (event) => {
      setloginpass(event.currentTarget.value);
    };

    const handleSignupEmailChange = (event) => {
      setsignupemail(event.currentTarget.value);
    };

    const handleSignupPassChange = (event) => {
      setsignuppass(event.currentTarget.value);
    };

    const handleLogin = () => {

      let cleanEmail = loginemail.trim();
      let cleanpass = loginpass.trim();

      if (cleanEmail.length === 0){
        alert("Please Enter Email");
        return;
      }
      
      if (cleanpass.length === 0){
        alert("Please Enter Password");
        return;
      }

      if (cleanpass.length <= 8){
        alert("Password must be at least 8 characters long");
        return;
      }

      navigate("/accountsettings");
      
    }

    const handleSignup = () => {

      let cleanEmail = signupemail.trim();
      let cleanpass = signuppass.trim();

      if (cleanEmail.length === 0){
        alert("Please Enter Username");
        return;
      }

      if (cleanpass.length === 0){
        alert("Please Enter Password");
        return;
      }

      if (cleanpass.length <= 8){
        alert("Password must be at least 8 characters long");
        return;
      }
    
      navigate("/accountsettings");
    }
  
    if (authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Log In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary">
                <a href="#" onClick={changeToSignUpMode}>Sign Up</a>
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Email"
                  id="loginemail"
                  onChange={handleLoginEmailChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  id="loginpass"
                  onChange={handleLoginPassChange}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button onClick={() => {
                        handleLogin();
                    }}>Log In</button>
              </div>
            </div>
          </form>
        </div>
      )
    }
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeToLoginMode}>
              <a href="#">Log In</a>
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Email"
                name="data"
                id="signupemail"
                onChange={handleSignupEmailChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                name="data"
                id="signuppass"
                onChange={handleSignupPassChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
                <button onClick={() => {
                    handleSignup();
                }}>Sign up</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
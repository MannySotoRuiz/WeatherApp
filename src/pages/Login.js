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

    const [loginuser, setloginuser] = useState("");
    const [loginpass, setloginpass] = useState ("");
    const [signupfirst, setsignupfirst] = useState ("");
    const [signuplast, setsignuplast] = useState ("");
    const [signupuser, setsignupuser] = useState ("");
    const [signuppass, setsignuppass] = useState ("");

    const handleLoginUserChange = (event) => {
      setloginuser(event.currentTarget.value);
    };

    const handleLoginPassChange = (event) => {
      setloginpass(event.currentTarget.value);
    };

    const handleSignupFirstChange = (event) => {
      setsignupfirst(event.currentTarget.value);
    };

    const handleSignupLastChange = (event) => {
      setsignuplast(event.currentTarget.value);
    };

    const handleSignupUserChange = (event) => {
      setsignupuser(event.currentTarget.value);
    };

    const handleSignupPassChange = (event) => {
      setsignuppass(event.currentTarget.value);
    };

    const handleLogin = () => {

      let cleanuser = loginuser.trim();
      let cleanpass = loginpass.trim();

      if (cleanuser.length === 0){
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

    const handleSignup = () => {

      let cleanFirst = signupfirst.trim();
      let cleanLast = signuplast.trim();
      let cleanuser = signupuser.trim();
      let cleanpass = signuppass.trim();
      
      if (cleanFirst.length === 0){
        alert("Please Enter First Name");
        return;
      }

      if (cleanLast.length === 0){
        alert("Please Enter Last Name");
        return;
      }

      if (cleanuser.length === 0){
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
                <label>Username</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Username"
                  id="loginuser"
                  onChange={handleLoginUserChange}
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
              <label>First Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="First Name"
                name="data" 
                id="signupfirst"
                onChange={handleSignupFirstChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Last Name"
                name="data"
                id="signuplast"
                onChange={handleSignupLastChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Username"
                name="data"
                id="signupuser"
                onChange={handleSignupUserChange}
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
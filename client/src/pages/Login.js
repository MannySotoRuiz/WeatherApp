import React, { useState } from "react";
import '../login.css';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    let navigate = useNavigate();

    const [loginemail, setloginemail] = useState("");
    const [loginpass, setloginpass] = useState ("");
    const {login, error: loginError, isLoading: loginIsLoading} = useLogin();

    const handleLoginEmailChange = (event) => {
      setloginemail(event.currentTarget.value);
    };

    const handleLoginPassChange = (event) => {
      setloginpass(event.currentTarget.value);
    };

    const handleLogin =  async (e) => {

      e.preventDefault();

      await login(loginemail, loginpass);
      
    }
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Log In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span style={{ cursor: "pointer" }} className="link-primary" onClick={() => {
                navigate("/signup");
            }}>
              Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
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
              <button disabled={loginIsLoading}>Log In</button>
              {loginError && <div className="error ">{loginError}</div>}
            </div>
          </div>
        </form>
      </div>
    )
  }

  export default Login;
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./LoginUI.css";

export default function LoginUI() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <div className="leftSide">
        <h2 className="heading">Login</h2>

        <input
          id="username"
          type="text"
          required
          className="inputField"
          placeholder="Username or email address*"
        />

        <div className="passwordWrapper">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            className="inputField"
            placeholder="Password*"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="passwordToggle"
            aria-label="Toggle password visibility"
            type="button"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="rememberForgotWrapper">
          <label className="rememberLabel">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#" className="forgotLink">
            Forgot Your Password?
          </a>
        </div>

        <a href="/login" className="loginButton">Login</a>

      </div>

      <div className="rightSide">
        <h2 className="heading">New Customer</h2>
        <p className="rightText">
          Be part of our growing family of new customers! Join us today and
          unlock a world of exclusive benefits, offers, and personalized
          experiences.
        </p>
        <a href="/Register" className="registerButton">Register</a>

        
      </div>
      
    </div>
    
  );
}

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Register.css";

export default function RegisterUI() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="container">
      <div className="leftSide">
        <h2 className="heading">Register</h2>

        <input
          id="fullName"
          type="text"
          required
          className="inputField"
          placeholder="Full Name*"
        />

        <input
          id="email"
          type="email"
          required
          className="inputField"
          placeholder="Email Address*"
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

        <div className="passwordWrapper">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            required
            className="inputField"
            placeholder="Confirm Password*"
          />
          <button
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="passwordToggle"
            aria-label="Toggle confirm password visibility"
            type="button"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <input
          id="address"
          type="text"
          required
          className="inputField"
          placeholder="Address*"
        />

        <input
          id="phone"
          type="number"
          required
          className="inputField"
          placeholder="Phone Number*"
        />

        <label className="rememberLabel" style={{ marginBottom: "1rem" }}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            required
          />
          I agree to the{" "}
          <a href="/terms" target="_blank" rel="noopener noreferrer" className="forgotLink">
            Terms of Use
          </a>
        </label>

        <button
          className="loginButton"
          type="submit"
          disabled={!agreed}
          onClick={() => window.alert("Registered! (Handle form submit)")}
        >
          Register
        </button>
      </div>

      <div className="rightSide">
        <h2 className="heading1">Already have an account?</h2>
        <p className="rightText">
         Welcome back. Sign in to access your personalized experience, saved preferences, and more. We're thrilled to have you with us again!


        </p>
        <a href="/login" className="loginButton1">Login</a>
      </div>
    </div>
  );
}

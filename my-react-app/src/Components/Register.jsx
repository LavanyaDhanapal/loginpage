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

        <label htmlFor="fullName" className="inputLabel">Full Name</label>
        <input
          id="fullName"
          type="text"
          required
          className="inputField"
          placeholder="Full Name*"
        />

        <label htmlFor="email" className="inputLabel">Email Address</label>
        <input
          id="email"
          type="email"
          required
          className="inputField"
          placeholder="Email Address*"
        />

        <label htmlFor="password" className="inputLabel">Password</label>
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

        <label htmlFor="confirmPassword" className="inputLabel">Confirm Password</label>
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

        <label htmlFor="address" className="inputLabel">Address</label>
        <input
          id="address"
          type="text"
          required
          className="inputField"
          placeholder="Address*"
        />

        <label htmlFor="phone" className="inputLabel">Phone Number</label>
        <input
          id="phone"
          type="number"
          required
          className="inputField"
          placeholder="Phone Number*"
          pattern="[0-9]{10}"
          maxLength={10}
        />

        <label className="rememberLabel" style={{ marginBottom: "1rem" }}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            required
          />
          I agree to the{" "}
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="forgotLink"
          >
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

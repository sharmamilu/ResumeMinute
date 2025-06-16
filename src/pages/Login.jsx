import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../styles/login.css"; // Optional if you separate login-specific styles

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login data:", data);
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <div className="overlay">
          <div className="branding">
            <img src="../src/assets/images/logo.png" alt="Platform Logo" className="logo" />
            <h1 className="headline">Welcome Back!</h1>
            <p className="tagline">Login to continue your journey with us.</p>
          </div>

          <ul className="features">
            <li>✔ Access personalized dashboard</li>
            <li>✔ Connect with your network</li>
            <li>✔ Get updates and insights</li>
            <li>✔ Secure and fast login experience</li>
          </ul>

          <p className="cta">Don't have an account? Register to get started!</p>
          <Link to="/register" className="register-link">Register Now</Link>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className={errors.email ? "input-error" : ""}
                placeholder="Enter your email"
              />
              {errors.email && <p className="error-msg">Email is required</p>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                {...register("password", { required: true })}
                type="password"
                className={errors.password ? "input-error" : ""}
                placeholder="Enter your password"
              />
              {errors.password && <p className="error-msg">Password is required</p>}
            </div>

            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

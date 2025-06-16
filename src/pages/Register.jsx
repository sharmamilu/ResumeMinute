import React from "react";
import { useForm } from "react-hook-form";
import "../styles/register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="register-wrapper">
     <div className="register-left">
  <div className="overlay">
    <div className="branding">
      {/* Optional Logo */}
      <img src="../src/assets/images/logo.png" alt="Platform Logo" className="logo" />
      <h1 className="headline">Welcome to Our Platform</h1>
      <p className="tagline">Connecting people, ideas, and innovation.</p>
    </div>
    
    <ul className="features">
      <li>✔ Seamless registration process</li>
      <li>✔ Access exclusive content and tools</li>
      <li>✔ Collaborate with like-minded individuals</li>
      <li>✔ Secure and fast platform experience</li>
    </ul>

    <p className="cta">Already have an account? Login and start your journey!</p>
    <Link to="/" className="login-link">Login Now</Link>
  </div>
</div>


      <div className="register-right">
        <div className="register-card">
          <h2 className="register-title">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="register-form">
            {[
              { id: "name", label: "Name" },
              { id: "contact", label: "Contact" },
              { id: "address", label: "Address" },
              { id: "email", label: "Email", type: "email" },
              { id: "password", label: "Password", type: "password" },
              { id: "cpassword", label: "Confirm Password", type: "password" }
            ].map(({ id, label, type = "text" }) => (
              <div className="form-group" key={id}>
                <label htmlFor={id}>{label}</label>
                <input
                  {...register(id, { required: true })}
                  type={type}
                  className={errors[id] ? "input-error" : ""}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                />
                {errors[id] && <p className="error-msg">{label} is required</p>}
              </div>
            ))}

            <button type="submit" className="register-button">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

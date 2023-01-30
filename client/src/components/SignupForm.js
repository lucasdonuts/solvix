import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const SignupForm = ({ userFormHidden, handleSwitchFormClick }) => {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => console.log(user));
      } else {
        res.json().then((data) => {
          console.log(data.errors);
          setErrors(data.errors);
        });
      }
    });
  };

  return (
    <div
      tabIndex={0}
      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mr-16"
      style={{ visibility: userFormHidden }}
    >
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="form-control w-full max-w-xs">
          <input
            required
            type="text"
            placeholder="Username"
            name="username"
            className="input input-bordered input-sm w-full max-w-xs"
            value={formData.username}
            onChange={handleChange}
          />
          <label className="label">
            <span className="label-text-alt">INSERT RESTRICTIONS</span>
          </label>
        </div>

        {/* Email address */}
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Email address (optional)"
            name="email"
            className="input input-bordered input-sm w-full max-w-xs"
            value={formData.email}
            onChange={handleChange}
          />
          <label className="label">
            <span className="label-text-alt">INSERT RESTRICTIONS</span>
          </label>
        </div>

        {/* Password */}
        <div className="form-control w-full max-w-xs">
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered input-sm w-full max-w-xs"
            value={formData.password}
            onChange={handleChange}
          />
          <label className="label">
            <span className="label-text-alt">INSERT RESTRICTIONS</span>
          </label>
        </div>

        {/* Password Confirmation */}
        <div className="form-control w-full max-w-xs">
          <input
            required
            type="password"
            placeholder="Confirm password"
            name="password_confirmation"
            className="input input-bordered input-sm w-full max-w-xs"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
          <label className="label">
            <span className="label-text-alt">INSERT RESTRICTIONS</span>
          </label>
        </div>

        {/* Submit */}
        <button className="btn btn-sm btn-wide btn-accent" type="submit">
          Create Account
        </button>
        {/* Remember Me */}
        {/* <div className="form-control w-52">
        <label className="cursor-pointer label">
          <span className="label-text">Remember me</span>
          <input type="checkbox" className="toggle toggle-secondary" />
        </label>
      </div> */}
      </form>
      <span className="flex mx-auto mt-3">
        <p className="text-xs">Already have an account?</p>
        <p
          onClick={handleSwitchFormClick}
          className="cursor-pointer text-xs ml-3 text-secondary"
        >
          Log in
        </p>
      </span>
    </div>
  );
};

export default SignupForm;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

const LoginForm = ({ userFormHidden, handleSwitchFormClick }) => {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
        });
      } else {
        res.json().then((data) => {
          console.log(data.errors);
          setErrors(data.errors);
        });
      }
    });
  };

  console.log(formData);

  return (
    <div
      tabIndex={0}
      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mr-16"
      style={{ visibility: userFormHidden }}
    >
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="form-control w-full max-w-xs my-1">
          <input
            required
            type="text"
            placeholder="Username"
            name="username"
            className="input input-bordered input-sm w-full max-w-xs"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="form-control w-full max-w-xs my-1">
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered input-sm w-full max-w-xs"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <button className="btn btn-sm btn-wide btn-accent" type="submit">
          Log In
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
        <p className="text-xs">Don't have an account?</p>
        <p
          onClick={handleSwitchFormClick}
          className="cursor-pointer text-xs ml-3 text-secondary"
        >
          Sign up
        </p>
      </span>
    </div>
  );
};

export default LoginForm;

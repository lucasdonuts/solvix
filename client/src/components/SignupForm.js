import { useState, useEffect } from "react";

const SignupForm = () => {
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
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(formData)
    }).then(res => {
      if(res.ok){
        res.json().then(user => console.log(user))
      } else {
        res.json().then(data => {
          console.log(data.errors)
          setErrors(data.errors);
        })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Username */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your username?</span>
        </label>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          className="input input-bordered w-full max-w-xs"
          value={formData.username}
          onChange={handleChange}
        />
        <label className="label">
          <span className="label-text-alt">INSERT RESTRICTIONS</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>

      {/* Email address */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">
            What is your email address? (optional)
          </span>
        </label>
        <input
          type="text"
          placeholder="Email address"
          name="email"
          className="input input-bordered w-full max-w-xs"
          value={formData.email}
          onChange={handleChange}
        />
        <label className="label">
          <span className="label-text-alt">INSERT RESTRICTIONS</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>

      {/* Password */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Enter password</span>
        </label>
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          className="input input-bordered w-full max-w-xs"
          value={formData.password}
          onChange={handleChange}
        />
        <label className="label">
          <span className="label-text-alt">INSERT RESTRICTIONS</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>

      {/* Password Confirmation */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Confirm password</span>
        </label>
        <input
          required
          type="password"
          placeholder="Confirm password"
          name="password_confirmation"
          className="input input-bordered w-full max-w-xs"
          value={formData.password_confirmation}
          onChange={handleChange}
        />
        <label className="label">
          <span className="label-text-alt">INSERT RESTRICTIONS</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>

      {/* Submit */}
      <button className="btn btn-square btn-wide btn-accent" type="submit">
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
  );
};

export default SignupForm;

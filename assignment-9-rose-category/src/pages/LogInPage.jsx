import React, { useState } from "react";
import { Link } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogInPage = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // reset messages
    setError("");
    setSuccess(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("Logged in:", result.user);
        setSuccess(true);
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login Your Account
        </h2>

        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full pr-10 
               focus:outline-none focus:ring-0 focus-visible:outline-none"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>

            <div className="relative w-full">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full pr-12 focus:outline-none focus:ring-0"
                placeholder="Password"
                required
              />

              {/* Toggle Icon */}
              <button
                type="button"
                onClick={handleShowPasswordToggle}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-0 bg-transparent border-none outline-none cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            <p className="font-semibold text-center pt-5">
              Don't Have An Account?{" "}
              <Link className="text-pink-600" to={"/signup"}>
                Signup
              </Link>
            </p>

            {/* Success & Error Messages */}
            {success && (
              <p className="text-green-700 text-center">Login Successful!</p>
            )}
            {error && <p className="text-red-700 text-center">{error}</p>}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;

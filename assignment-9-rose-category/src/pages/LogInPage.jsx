import React, { useState } from "react";
import { Link } from "react-router";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

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
        toast.success("Login Successful!");
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        toast.error("Something went wrong please try again later!");
      });
  };

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("Logged in:", result.user);
        setSuccess(true);
        toast.success("Login Successful!");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        toast.error("Something went wrong please try again later!");
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

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px w-16 bg-gray-300"></div>
              <span className="text-smtext-white/70">or</span>
              <div className="h-px w-16 bg-gray-300"></div>
            </div>
            {/* Google Signin */}
            <button
              type="button"
              onClick={handleGoogleSignin}
              className="flex items-center justify-center gap-3 rounded-sm cursor-pointer bg-black
            text-white px-5 py-2 rounded-1g w-full font-semibold
            hover:bg-pink-950 transition-colors"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
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
            {error && (
              <p className="text-red-700 text-center">
                Something went wrong please try again later!
              </p>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;

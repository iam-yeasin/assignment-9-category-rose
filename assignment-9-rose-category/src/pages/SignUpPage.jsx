import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./../firebase/firebase.config";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";

const SignUpPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigate("/", { replace: true });
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handlesighup = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });

    // ^.{6,}$
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/
    // const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    const passwordPattern = /^.{6,}$/;
    if (!passwordPattern.test(password)) {
      console.log("pass didn't match");
      setError("Password must be at least 6 characters long");
      toast.error("Password must be at least 6 characters long");
      return;
    }

    // reset status success or error
    setError("");
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        e.target.reset();
        toast.success("Signup Sucessful");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        toast.error(error.message);
      });
  };

  const handleShowPasswordToggle = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Signup Your Account
        </h2>
        <form onSubmit={handlesighup} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <div className="relative w-full">
              <input
                name="name"
                type="text"
                className="input input-bordered w-full pr-10 
               focus:outline-none focus:ring-0 focus-visible:outline-none"
                placeholder="Name"
                required
              />
            </div>

            {/* Photo */}
            <label className="label">Photo URL</label>
            <div className="relative w-full">
              <input
                name="photo"
                type="text"
                className="input input-bordered w-full pr-10 
               focus:outline-none focus:ring-0 focus-visible:outline-none"
                placeholder="Photo URL"
                required
              />
            </div>

            {/* Email */}
            <label className="label">Email</label>
            <div className="relative w-full">
              <input
                name="email"
                type="email"
                className="input input-bordered w-full pr-10 
               focus:outline-none focus:ring-0 focus-visible:outline-none"
                placeholder="Email"
                required
              />
            </div>
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
                <span className="text-xl">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </button>
            </div>

            <div>
              {/* <a className="link link-hover">Forgot password?</a> */}
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Sign Up
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account?{" "}
              <Link className="text-pink-600" to={"/login"}>
                Login
              </Link>
            </p>
            {success && (
              <p className="text-green-700 text-center">
                account create successfully
              </p>
            )}
            {error && <p className="text-red-700 text-center">{error}</p>}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

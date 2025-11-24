import React from "react";
import { Link } from "react-router";

const SignUpPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Signup Your Account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              {/* <a className="link link-hover">Forgot password?</a> */}
            </div>
            <button className="btn btn-neutral mt-4">Signup</button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account?{" "}
              <Link className="text-pink-600" to={"/login"}>
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

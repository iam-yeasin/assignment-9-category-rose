import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // email from login page (router state)
  const [email, setEmail] = useState(location.state?.email || "");

  const handleResetPassword = () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send reset email");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Forgot Password
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full mb-4"
          placeholder="Enter your email"
          required
        />

        <button
          onClick={handleResetPassword}
          className="btn btn-neutral w-full"
        >
          Send Reset Email
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Reset password email:", email);

    // Forgot password API will be added here
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white relative rounded-2xl shadow-lg p-8">

        <div className="text-center mb-8">
          <Link
            to="/"
            className="text-sm absolute left-2 top-1 font-bold text-emerald-600"
          >
            <i class="fa-solid fa-arrow-left"></i>
            Back to Home
          </Link>

          <h1 className="text-2xl font-bold text-gray-800 mt-6">
            Forgot Password?
          </h1>

          <p className="text-gray-500 mt-2">
            Enter your email and we'll help you reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Send Reset Link
          </button>

        </form>

        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-emerald-600 font-semibold"
          >
            <i className="fa-solid fa-arrow-left"></i> Back to Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;
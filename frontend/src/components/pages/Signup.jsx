import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repassword:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setloading(true);
    if (formData.password !== formData.repassword) {
      alert("Passwords do not match");
      return;
    }
setloading(true)
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        formData
      );
      alert("Account is created. Please log in");

      console.log(res.data);

      navigate("/login");
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Something went wrong");
    }finally{
      setloading(false);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleSignup}
        className="bg-gray-800 p-8 m-2 rounded-xl w-full"
      >
        <h1 className="text-2xl text-white font-bold mb-6">Create Account</h1>

        <input
          type="name"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 mb-4 rounded border-2 border-white"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded border-2 border-white"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full p-2 rounded border-2 border-white"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="repassword"
            placeholder="Confirm Password"
            className="w-full p-2 rounded border-2"
            value={formData.repassword}
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full mt-4 bg-green-600 py-2 rounded"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Account is creating...
            </>
          ) : (
            "Signup"
          )}
        </button>
        <p className="mt-3 text-center">
          Already have an account?{" "}
          <span
            className="text-red-500 cursor-default"
            onClick={() => navigate("/login")}
          >
            {" "}
            Log in
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../feature/auth/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginUser(formData)).unwrap();
      console.log(result);
      console.log(result, "User");

      switch (result.user.role.trim().toLowerCase()) {
        case "admin":
          navigate("/dashboard/admin");
          break;

        case "doctor":
          navigate("/dashboard/doctor");
          break;

        default:
          navigate("/dashboard/users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 m-2 rounded-xl w-full"
      >
        <h1 className="text-2xl text-white font-bold mb-6">Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded border-2 border-white"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="relative">
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

        <button
          disabled={loading}
          className="w-full mt-4 bg-green-600 py-2 rounded"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>
        <p className="text-center mt-3">
          New to account?{" "}
          <span
            className="text-red-500 cursor-default"
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>{" "}
        </p>
      </form>
    </div>
  );
}

export default Login;

import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser, logout } from "../../slice/authSlice";
import { useSelector } from "react-redux";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  useEffect(() => {
    if (!user) return;

    if (user.role === "admin") {
      navigate("/dashboard/admin");
    } else if (user.role === "doctor") {
      navigate("/dashboard/doctor");
    } else {
      navigate("/dashboard/users");
    }
  }, [navigate, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const res = await axios.post("/auth/login", formData, {
  //       withCredentials: true,
  //     });
  //     toast.success("Login successful 🚀");

  //     console.log("Login success:", res.data);
  //     dispatch(loginUser(res.data.user));

  //     // Example: save token
  //     localStorage.setItem("token", JSON.stringify(res.data));
  //     let isAdmin =
  //       typeof res.data.user.isAdmin === "string"
  //         ? res.data.user.isAdmin === "true"
  //           ? true
  //           : false
  //         : res.data.user.isAdmin;
  //     // redirect after login
  //     return isAdmin
  //       ? navigate("/dashboard/admin")
  //       : navigate("/dashboard/users");
  //   } catch (error) {
  //     setLoading(false);
  //     toast.error(error.response?.data?.message || "login failed");
  //     console.log("Login error:", error.response?.data || error.message);
  //   }
  // };

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post(
  //       "http://localhost:8000/api/auth/login",
  //       formData
  //     );

  //     console.log(res.data);

  //     localStorage.setItem("token", res.data.token);

  //     dispatch(loginUser(res.data.user));

  //     const roleData = res.data.user.role;

  //     localStorage.setItem("role", roleData);

  //     if (roleData === "admin") {
  //       navigate("/dashboard/admin");
  //     } else if (roleData === "doctor") {
  //       navigate("/dashboard/doctor");
  //     } else {
  //       navigate("/dashboard/users");
  //     }

  //   } catch (error) {
  //     console.log("ERROR:", error);
  //     console.log("RESPONSE:", error.response?.data);
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData,
      );
      console.log(result.data);
      console.log("Login response:", result.user);

      const { user, token } = result.data;
      console.log(user, token);

      // Save authentication data
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);
      console.log(user.role);
      // navigate("/dashboard/admin");
      // Save user in Redux
      dispatch(loginUser(user));

      // Navigate based on role
      if (user.role == "admin") {
        navigate("/dashboard/admin");
      } else if (user.role === "doctor") {
        navigate("/dashboard/doctor");
      } else {
        navigate("/dashboard/users");
      }
    } catch (error) {
      console.log("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-xl w-96">
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

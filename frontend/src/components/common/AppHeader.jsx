import { useAxios } from "../../lib/provider/axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slice/authSlice";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { PopupContent } from "../popup/Popup";
import { usePopup } from "../../context/popupContext";

function AppHeader() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPopupOpen, setisPopupOpen] = useState(false);
  const [authMode, setAuthMode] = useState(null); // "login" | "signup" | null
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { axios } = useAxios();

  // const user = useSelector((state) => state.auth.user);

  const user = JSON.parse(localStorage.getItem("token"));
  console.log(user);
  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  // const handleAuthSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("dashboard");
  //   try {
  //     setLoading(true);
  //     // SIGNUP
  //     if (authMode === "signup") {
  //       if (authForm.password !== authForm.repassword) {
  //         alert("Passwords do not match");
  //         return;
  //       }
  //       console.log(authForm);
  //       await axios.post("/auth/register", authForm);
  //       alert("Signup successful!");
  //       setAuthMode("login");
  //       setAuthForm({ email: "", password: "", repassword: "" });
  //     }

  //     // LOGIN
  //     else if (authMode === "login") {
  //       const res = await axios.post("/auth/login", {
  //         email: authForm.email,
  //         password: authForm.password,
  //         role: authForm.role,
  //       });

  //       console.log(res.data);
  //       setAuthMode(null);
  //       if (res.role === "admin") {
  //         navigate("/dashboard/admin");
  //         return;
  //       } else if (res.role === "doctor") {
  //         navigate("/dashboard/doctor");
  //         return;
  //       } else {
  //         navigate("/dashboard/users");
  //         return;
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error.response?.data || error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    console.log("login");
    navigate("/dashboard/admin");
  };

  const {toggle} = usePopup()

  return <>
  <button onClick={toggle}>show popup</button>
  <Popup>
    <PopupContent>
      Hello worl
    </PopupContent>
  </Popup>
  </>

  // const [logoutPopup, setlogoutPopup] = useState(false)
  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-40 flex my-4 items-center justify-between bg-[#16171D] px-4 py-2">
        <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Medicare
        </div>

        <input
          className="border rounded-2xl px-3 py-1 w-[40%]"
          placeholder="fever, cold, headache"
        />

        <div>
          {user ? (
            <div className="flex gap-3">
              <button
                onClick={() => {
                  const confirmLogout = window.confirm(
                    "Are you sure you want to logout?",
                  );
                  if (confirmLogout) {
                    setisPopupOpen(true);
                    localStorage.clear("token");

                    navigate("/");
                  }
                }}
                className="bg-red-500 px-4 py-1 rounded"
              >
                Logout
              </button>

              <button
                onClick={() => {
                  if (user.role === "admin") {
                    navigate("/dashboard/admin");
                  } else if (user.role === "patient") {
                    navigate("/dashboard/users");
                  } else {
                    navigate("/dashboard/doctor");
                  }
                }}
                className="bg-green-500 px-4 py-1 rounded"
              >
                Dashboard
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-green-500 text-black px-4 py-1 rounded"
            >
              Sign in
            </button>
          )}
        </div>
      </div>

      <Popup open={isPopupOpen} onClose={() => isPopupOpen(false)} modal>
        <button onClick={() => setisPopupOpen(false)}>Close</button>
      </Popup>

      {/* MODAL */}
      {authMode && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg w-96 relative text-white">
            <button
              onClick={() => setAuthMode(null)}
              className="absolute top-2 right-2"
            >
              ✕
            </button>

            <h2 className="text-center text-xl mb-4">
              {authMode === "login" ? "Login" : "Sign Up"}
            </h2>

            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-3">
              <input
                name="email"
                value={authForm.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-2 rounded border-2 border-white text-white"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={authForm.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="p-2 rounded text-white w-full border-2 border-white"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {authMode === "signup" && (
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="repassword"
                    value={authForm.repassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="p-2 rounded text-gray w-full border-2 border-white"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 top-2"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 py-2 rounded"
              >
                {loading
                  ? "Loading..."
                  : authMode === "login"
                    ? "Login"
                    : "Sign Up"}
              </button>

              <p className="text-center text-sm">
                {authMode === "login" ? (
                  <>
                    New user?{" "}
                    <span
                      onClick={() => setAuthMode("signup")}
                      className="text-red-400 cursor-pointer"
                    >
                      Sign Up
                    </span>
                  </>
                ) : (
                  <>
                    Already have account?{" "}
                    <span
                      onClick={() => setAuthMode("login")}
                      className="text-red-400 cursor-pointer"
                    >
                      Login
                    </span>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AppHeader;

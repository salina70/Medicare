import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Logo from "../ui/atoms/Logo";
import Input from "../../components/ui/atoms/Input";

function Header() {
  const [sidePopup, setSidePopup] = useState(false);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [authMode, setAuthMode] = useState(null); // "login" | "signup" | null
  const navigate = useNavigate();

  const userRole = useSelector((state) => state.auth.user);

  console.log(userRole);
  console.log(sidePopup);

  const user = localStorage.getItem("token");
  console.log(user);
  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    console.log("login");
    navigate("/dashboard/admin");
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-40 flex my-4 items-center justify-between bg-[#16171D] px-4 py-2">
        <Logo />
        <Input rightIcon={<CiSearch />} />
        <div>
          {user ? (
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setModal(true);
                }}
                className="bg-red-500 px-4 py-1 rounded"
              >
                Logout
              </button>

              <button
                onClick={() => {
                  console.log(userRole.role);
                  if (userRole.role === "admin") {
                    navigate("/dashboard/admin");
                  } else if (userRole.role === "patient") {
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

      {modal && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-80 rounded-lg bg-white shadow-xl p-6">
          <p className="mt-2 text-black">Are you sure you want to logout?</p>

          <div className="mt-4 flex justify-end gap-3">
            <button
              className="px-4 py-2 rounded text-black bg-gray-200 hover:bg-gray-300"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancel
            </button>

            <button
              disabled={loading}
              className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 spin"
              onClick={() => {
                setLoading(true);

                setTimeout(() => {
                  localStorage.clear();
                  navigate("/");
                  setModal(false);
                }, 2000);

                setTimeout(() => {
                  setSidePopup(false);
                }, 1000);
              }}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Logging out...
                </div>
              ) : (
                "Logout"
              )}
            </button>
          </div>
        </div>
      )}

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

      {sidePopup && (
        <div className="fixed top-5 right-3 z-50 transform rounded-lg bg-green-500 px-5 py-4 text-white shadow-xl transition-all duration-500 animate">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm">You have successfully logged out.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

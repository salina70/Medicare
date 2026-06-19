import { useAxios } from "../../lib/provider/axios";
import React, { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slice/authSlice";

function AppHeader() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const closeModal = useRef(null);
  const doctorModal = useRef(null);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [open, setOpen] = useState(false);
  const [signin, setSignin] = useState(false);
  const [loggedin, setLoggedin] = useState(false);

  const { axios } = useAxios();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  // const [docForm, setdocForm] = useState(false)

  const [formData, setformData] = useState({
    name: "",
    speciality: "",
    email: "",
    experience: "",
    fee: "",
  });
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    repassword: "",
  });

  const checkForm = () => {
    if (
      formData.name.trim() === "" ||
      formData.speciality.trim() === "" ||
      formData.email.trim() === "" ||
      formData.fee.trim() === "" ||
      formData.experience === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Form submitted successfully!");
    navigate("/patient-dashboard");
    console.log(setformData(formData));
  };

  const loginModal = () => {
    if (signin) {
      closeModal.current.style.display = "none";
    }
    setSignin(false);
    setLoggedin(false);
  };
  const SignUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // ✅ SIGNUP FLOW
      if (!signin) {
        if (signUp.password !== signUp.repassword) {
          alert("Passwords do not match");
          return;
        }
        await axios.post("/auth/register", signUp);

        setSignin(false);
        navigate("/user-dashboard");
      }

      // ✅ LOGIN FLOW
      else {
        console.log(formData);
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const doctorModalForm = () => {
    setOpen(false);
    doctorModal.current.style.display = "none";
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setSignUp((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  return (
    <>
      <div
        id="navbar"
        className="sticky top-0 z-40 flex my-4 items-center justify-between bg-[#16171D] px-4 py-2"
      >
        {/* Logo */}
        <div className="logo font-semibold text-2xl bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Medicare
        </div>

        {/* Search */}
        <div className="search relative w-[40%]">
          <input
            type="text"
            className="border pl-2.5 border-gray-400 rounded-2xl pr-10 pr-4 py-1.5 w-full focus:outline-none focus:border-green-500"
            placeholder="fever, cold, headache"
          />
        </div>

        {/* Right buttons */}
        <div className="flex items-center">
          {user ? (
            <div className="flex gap-4">
              <div
                onClick={() => {
                  dispatch(logout());
                  alert("You have successfully logout");
                  navigate("/");
                }}
                className="sign-in rounded-md px-4 py-1.5 text-sm bg-red-500 font-semibold text-black hover:bg-red-600 cursor-pointer"
              >
                <i className="fa-solid fa-right-from-bracket mr-1"></i>
                Logout
              </div>
              <Link
                to={
                  user.isAdmin === true
                    ? "/dashboard/admin"
                    : "/dashboard/users"
                }
                className="sign-in rounded-md px-4 py-1.5 text-sm bg-red-500 font-semibold text-black hover:bg-red-600 cursor-pointer"
              >
                <i className="fa-solid fa-right-from-bracket mr-1"></i>
                Dashboard
              </Link>
            </div>
          ) : (
            <div
              onClick={() => navigate("/login")}
              className="sign-in rounded-md px-4 py-1.5 text-sm bg-green-500 font-semibold text-black hover:bg-green-600 cursor-pointer"
            >
              <i className="fa-solid fa-user mr-1"></i>
              Sign in
            </div>
          )}
        </div>
      </div>

      {/* 🔥 MODAL (INSIDE RETURN) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          ref={doctorModal}
        >
          <div className="bg-gray-800 w-[90%] max-w-md rounded-xl p-6 shadow-lg relative">
            {/* Close button */}
            <button
              onClick={doctorModalForm}
              className="absolute top-2 text-center hover:bg-gray-400 rounded-[50%] h-5 w-5 flex justify-center items-center right-3 text-xl text-gray-600"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold text-center mb-4">
              Doctor Registration
            </h2>

            <form className="flex flex-col gap-3">
              <input
                className="border p-2 rounded-md"
                placeholder="Full Name"
              />
              <input
                className="border p-2 rounded-md"
                placeholder="Speciality"
              />
              <input
                className="border p-2 rounded-md"
                placeholder="Experience (years)"
              />
              <input className="border p-2 rounded-md" placeholder="Email" />
              <input className="border p-2 rounded-md" placeholder="Fee (Rs)" />

              <button
                onClick={checkForm}
                className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* {signin && (
        <div
          className="h-screen z-100 w-screen inset-0 fixed flex justify-center items-center bg-black/80"
          ref={closeModal}
        >
          <div
            className={`relative inner-modal h-80 w-90 rounded-xl bg-gray-800 text-white flex justify-center items-center ${loggedin ? "h-96 w-96" : "h-80 w-90"} `}
          >
            <h1 className="absolute top-3 font-bold text-2xl ">
              {loggedin ? (
                "Create an account"
              ) : (
                <>
                  Login to <span className="text-green-600">Medicare</span>
                </>
              )}
            </h1>
            <div
              onClick={loginModal}
              className="absolute right-2 top-2 text-xl h-8 w-8 text-center cursor-default flex justify-center items-center rounded-full hover:font-semibold hover:scale-105 transition"
            >
              x
            </div>

            <form onSubmit={SignUp} className="flex flex-col gap-2 mt-8 w-70">
              <label htmlFor="email">Email:</label>
              <input
                className=" border-1 rounded-sm px-2 text-base py-2"
                type="text"
                placeholder="Enter Email"
                id="email"
                name="email"
                value={signUp.email}
                onChange={handleChange}
              />
              <label htmlFor="pass">Password:</label>
              <div className="relative">
                <input
                  className="border border-gray-400 rounded-md pr-10 px-3 py-2 w-full focus:outline-none focus:border-green-500"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  id="pass"
                  name="password"
                  value={signUp.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {loggedin && (
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Retype Password"
                    className="border border-gray-400 rounded-md pr-10 px-3 py-2 w-full focus:outline-none focus:border-green-500"
                    name="repassword"
                    value={signUp.repassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
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
                className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md flex justify-center items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Please wait...
                  </>
                ) : loggedin ? (
                  "Sign Up"
                ) : (
                  "Log In"
                )}
              </button>

              <p className="text-center text-sm">
                {loggedin ? (
                  <>
                    Already have an account?
                    <span
                      className="text-red-500 cursor-pointer hover:text-red-600"
                      onClick={() => setLoggedin(false)}
                    >
                      {" "}
                      Login
                    </span>
                  </>
                ) : (
                  <>
                    New to account?
                    <span
                      className="text-red-500 cursor-pointer hover:text-red-600"
                      onClick={() => setLoggedin(true)}
                    >
                      {" "}
                      Sign up
                    </span>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      )} */}
    </>
  );
}

export default AppHeader;

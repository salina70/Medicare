import React, { useState } from "react";
import "../index.css";
import { useRef } from "react";

function Header() {
  const closeModal = useRef(null);
  const [open, setOpen] = useState(false);
  const [signin, setSignin] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [cross, setCross] = useState(false);

  const [formData, setformData] = useState({
    name: "",
    speciality: "",
    email: "",
    experience: "",
    fee: "",
  });

  const checkForm = () => {
    if (
      formData.name.trim() === "" ||
      formData.speciality.trim() === "" ||
      formData.email.trim() === "" ||
      formData.fee.trim === "" ||
      formData.experience === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Form submitted successfully!");
    console.log(formData);
  };

const loginModal = ()=>{
  if(signin){
    closeModal.current.style.display='none';
  }
}
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
            className="border border-gray-400 rounded-2xl pl-10 pr-4 py-1.5 w-full focus:outline-none focus:border-green-500"
            placeholder="fever, cold, headache"
          />

          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>

        {/* Right buttons */}
        <div className="flex items-center">
          <div
            onClick={() => setOpen(true)}
            className="be-a-doc cursor-pointer mr-9 hover:scale-105 px-2 py-1.5"
          >
            Be a doctor
          </div>

          <div
            onClick={() => setSignin(!signin)}
            className="sign-in rounded-md px-4 py-1.5 text-sm bg-green-500 font-semibold text-black hover:bg-green-600 cursor-default"
          >
            <i className="fa-solid fa-user mr-1"></i>
            Sign in
          </div>
        </div>
      </div>

      {/* 🔥 MODAL (INSIDE RETURN) */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-800 w-[90%] max-w-md rounded-xl p-6 shadow-lg relative">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
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

      {signin && (
        <div className="h-screen z-100 w-screen inset-0 fixed flex justify-center items-center bg-black/80" ref={closeModal}>
          <div className="relative inner-modal h-80 w-90 rounded-xl bg-gray-800 text-white flex justify-center items-center ">
            <h1 className="absolute top-3 font-bold text-2xl ">
              {loggedin ? (
                "Create an account"
              ) : (
                <>
                  {" "}
                  Login to <span className="text-green-600">Medicare</span>{" "}
                </>
              )}
            </h1>
            <div
            onClick={loginModal}
            className="absolute right-2 top-2 text-xl h-8 w-8 text-center cursor-default flex justify-center items-center rounded-full hover:font-semibold hover:scale-105 transition">
              x
            </div>

            <form action="" className="flex flex-col gap-2 mt-8 w-70">

              <input
                className=" border-1 rounded-sm px-2 text-base py-2"
                type="text"
                placeholder="Enter Email"
                id="email"
              />
              <input
                className=" border-1  rounded-sm px-2 text-base py-2"
                type="text"
                placeholder="Enter Password"
                id="pass"
              />
              
{loggedin ? (

  <>
  <input type="text" placeholder="Retype Password" className="border-1 rounded-sm px-2 text-base py-2" id="cpass" />
  </>
):""
}
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white font-semibold mt-4 py-1.5 rounded-sm"
              >
                {loggedin ? "Sign up" : "Log in"}{" "}
              </button>
             
<p className="text-center text-sm">
  {loggedin ? (
    <>
      Already have an account?{" "}
      <span
        className="text-red-500 cursor-pointer hover:text-red-800"
        onClick={() => setLoggedin(false)}
      >
        Login
      </span>
    </>
  ) : (
    <>
      New to account?{" "}
      <span
        className="text-red-500 cursor-pointer hover:text-red-800"
        onClick={() => setLoggedin(true)}
      >
        Sign up
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

export default Header;

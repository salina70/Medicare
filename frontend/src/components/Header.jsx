import React, { useState } from "react";
import '../index.css';

function Header() {
  const [open, setOpen] = useState(false);
  const [signin, setSignin] = useState(false)

  const [formData, setformData] = useState(
    {name:"", speciality:"", email:"", experience:"", fee:""}
  )

  const checkForm = () => {
  if (
    formData.name.trim() === "" ||
    formData.speciality.trim() === "" ||
    formData.email.trim() === "" ||
    formData.fee.trim===""||
    formData.experience===""
  ) {
    alert("Please fill all fields");
    return;
  }

  alert("Form submitted successfully!");
  console.log(formData);
};
  return (
    <>
<div id="navbar" className="sticky top-0 z-40 flex my-4 items-center justify-between bg-[#16171D] px-4 py-2">
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

          <div className="sign-in rounded-md px-4 py-1.5 text-sm bg-green-500 font-semibold text-black hover:bg-green-600">
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

              <input className="border p-2 rounded-md" placeholder="Full Name" />
              <input className="border p-2 rounded-md" placeholder="Speciality" />
              <input className="border p-2 rounded-md" placeholder="Experience (years)" />
              <input className="border p-2 rounded-md" placeholder="Email" />
              <input className="border p-2 rounded-md" placeholder="Fee (Rs)" />

              <button onClick={checkForm} className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                Submit Application
              </button>

            </form>

          </div>

        </div>
      )}

      {
signin && (
  <div className="outer-div">
<div className="inner-div">
<h2>  Create an Account</h2>
<div className="form">
  <form action="">
    <input type="text" placeholder="Enter email" id="email" />
    <input type="text" placeholder="Enter password" id="pass" />
    <button type="submit"></button>
  </form>
</div>
</div>
  </div>
)
      }
    </>
  );
}

export default Header;
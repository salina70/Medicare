import React, { useState } from "react";
import Department from "./Departments";

function Heropage() {
  const [open, setOpen] = useState(false);

  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    problem: "",
  });

  // today's date
  const today = new Date().toISOString().split("T")[0];

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.date < today) {
      alert("Past date not allowed");
      return;
    }

    alert("Appointment booked!");
    console.log(formData);

    // reset form
    setFormData({
      name: "",
      email: "",
      date: "",
      problem: "",
    });

    setOpen(false);
  };

  const [showDept, setshowDept] = useState(false);

  return (
    <>
      <div className="flex mt-29 mb-18 gap-10">
        <div>
          <h1 className="text-4xl">
            Book your appointment
            <span className="block text-6xl italic text-green-600">
              anytime, anywhere
            </span>
          </h1>

          <p className="text-xs text-gray-500 mt-4">
            consult with doctors in video call and get your health checkup quickly
          </p>

          <button
            onClick={() => setOpen(true)}
            className="btn my-7 transition bg-green-500 hover:bg-green-600 text-black font-semibold mt-4"
          >
            Book Appointment
          </button>

        
            <button onClick={()=>{setshowDept(!showDept);}} className="btn my-7 transition duration-300 border-2 border-green-600 ml-4">
              View Departments
            </button>
        
        </div>

        <div>
          <img className="w-[30rem] -mt-25" src="../images/doctor.png" alt="" />
        </div>
      </div>




      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl w-[90%] max-w-md shadow-lg relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 hover:bg-gray-600 rounded-full h-5 w-5 right-3 text-xs text-white"
            >
              X
            </button>

            <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="border p-2 rounded"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border p-2 rounded"
                required
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                className="border p-2 rounded"
                required
              />

              <textarea
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                placeholder="Describe your problem"
                className="border p-2 rounded"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      )}

    </>
  );
}

export default Heropage;
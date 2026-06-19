import React, { useState } from "react";
import { useAxios } from "../../lib/provider/axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Heropage() {
  const [open, setOpen] = useState(false);
  const [showDept, setshowDept] = useState(false);
  const nav = useNavigate();

  const [specialist, setSpecialist] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const { axios } = useAxios();

  const user = useSelector((state) => state.auth.user);
  const [formData, setFormData] = useState({
    dateTime: "",
    description: "",
    age: "",
    gender: "",
    phone: "",
    email: user?.email,
    patient_id: user?.id,
  });
  console.log(user);
  const handleSpecialistChange = async (e) => {
    const value = e.target.value;

    setSpecialist(value);

    try {
      const res = await axios.get(`/doctors?specialist=${value}`);

      setDoctors(res.data.doctors);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const bookAppValidate = () => {
    if (!user) {
      confirm("please login first");
      nav("/login");
    } else {
      setOpen(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedDate = new Date(formData.dateTime);
    const now = new Date();

    if (selectedDate < now) {
      alert("Past date/time not allowed");
      return;
    }

    try {
      const payload = {
        ...formData,
        doctor_id: selectedDoctor,
        department: specialist,
      };

      const res = await axios.post("/appointment", payload);

      alert(res.data.message);

      setFormData({
        dateTime: "",
        age: "",
        email: "",
        phone: "",
        description: "",
      });

      setOpen(false);
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  const now = new Date().toISOString().slice(0, 16);
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero flex mt-29 ml-12 mb-18 gap-10">
        <div className="inner-hero">
          <h1 className="text-4xl">
            Book your appointment
            <span className="block text-6xl italic text-green-600">
              anytime, anywhere
            </span>
          </h1>

          <p className="text-xs text-gray-500 mt-4">
            consult with doctors in video call and get your health checkup
          </p>

          <button
            onClick={bookAppValidate}
            className="bg-green-500 px-4 py-2 mt-4"
          >
            Book Appointment
          </button>

          <button
            onClick={() => setshowDept(!showDept)}
            className="border ml-4 px-4 py-2"
          >
            View Departments
          </button>
        </div>
        <div>
          <img
            src="/images/doctor.png"
            alt=""
            className="w-full max-w-md mx-auto absolute top-36"
          />
        </div>
      </div>

      {/* POPUP */}
      {open && (
        <div className=" fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl w-[90%] h-[87%] overflow-y-auto max-w-md relative text-green-700">
            {" "}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 bg-gray-700 w-6 h-6 rounded-full text-xs"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="datetime-local"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                min={now}
                className="p-2  border rounded text-white"
                required
              />
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                min="1"
                className="p-2  border rounded text-white"
                required
              />

              <select
                value={specialist}
                onChange={handleSpecialistChange}
                className="p-2 border rounded  text-white"
                required
              >
                <option className="bg-gray-500" value="">
                  Select Specialist
                </option>

                <option className="bg-gray-500" value="Cardiologist">
                  Cardiologist
                </option>

                <option className="bg-gray-500" value="Dermatologist">
                  Dermatologist
                </option>

                <option className="bg-gray-500" value="Neurologist">
                  Neurologist
                </option>

                <option className="bg-gray-500" value="Orthopedic">
                  Orthopedic
                </option>

                <option className="bg-gray-500" value="Pediatrician">
                  Pediatrician
                </option>
              </select>

              <select
                name="doctor_id"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="p-2 border rounded text-white"
                required
              >
                <option className="bg-gray-500" value="">
                  Select Doctor
                </option>

                {doctors.map((doctor) => (
                  <option
                    className="bg-gray-500"
                    key={doctor._id}
                    value={doctor._id}
                  >
                    {doctor.name}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-2 border rounded text-white"
                required
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your problem"
                rows="4"
                className="p-2 border rounded text-white"
                required
              />

              <button
                type="submit"
                className="bg-green-600 py-2 text-white rounded hover:bg-green-700"
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

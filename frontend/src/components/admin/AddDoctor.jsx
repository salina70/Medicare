import { useState } from "react";
import { doctorSchema } from "./DoctorSchema";

export default function AddDoctor() {
  const [doctor, setDoctor] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    specialty: "",
    department: "",
    experience: "",
    qualification: "",
    consultationFee: "",
    address: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = doctorSchema.safeParse(doctor);

    if (!result.success) {
      const fieldErrors = {};
      try {
        ((result.error || {}).errors || []).forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
      } catch (error) {
        console.log(error);
      }

      setErrors(fieldErrors);
    }

    setErrors({});
    console.log("Valid Data:", result.data);

    alert("Doctor Added Successfully");
  };

  return (
    <div className="p-6 bg-gray-600 min-h-screen text-sm">
      <div className="bg-grey-200 rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Add New Doctor</h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Full Name */}
          <div>
            <label>Full Name</label>
            <input
              name="fullName"
              value={doctor.fullName}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <input
              name="email"
              value={doctor.email}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label>Phone</label>
            <input
              name="phone"
              value={doctor.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Specialty */}
          <div>
            <label>Specialty</label>
            <select
              name="specialty"
              value={doctor.specialty}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            >
              <option value="" className="text-white bg-gray-700">
                Select Specialty
              </option>
              <option className="bg-gray-700 text-white">Cardiology</option>
              <option className="bg-gray-700 text-white">Neurology</option>
              <option className="bg-gray-700 text-white">Dermatology</option>
              <option className="bg-gray-700 text-white">Opthalmology</option>
              <option className="bg-gray-700 text-white">Pediatrics</option>
              <option className="bg-gray-700 text-white">Orthopedics</option>
            </select>
            {errors.specialty && (
              <p className="text-red-500 text-sm">{errors.specialty}</p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label>Experience</label>
            <input
              name="experience"
              type="number"
              value={doctor.experience}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            {errors.experience && (
              <p className="text-red-500 text-sm">{errors.experience}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={doctor.password}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label>Address</label>
            <textarea
              name="address"
              value={doctor.address}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-end">
            <button className="bg-blue-600 text-white px-6 py-3 rounded">
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

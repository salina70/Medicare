import { useState } from "react";
import { doctorSchema } from "./DoctorSchema";
import { useAxios } from "../../lib/provider/axios";
import { useNavigate } from "react-router-dom";

export default function AddDoctor() {
  const navigate = useNavigate();
  const { axios } = useAxios();
  const [doctor, setDoctor] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    role: "doctor",
    department: "",
    experience: "",
    qualification: "",
    consultationFee: "",
    address: "",
    description: "",
    image: null,
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);




  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setDoctor({
        ...doctor,
        image: files[0],
      });
    } else {
      setDoctor({
        ...doctor,
        [name]: value,
      });
    }
  };
 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(doctor)
  
  const formData = new FormData();

formData.append("fullName", doctor.fullName);
formData.append("email", doctor.email);
formData.append("phone", doctor.phone);
formData.append("gender", doctor.gender);
formData.append("role", doctor.role);
formData.append("department", doctor.department);
formData.append("experience", doctor.experience);
formData.append("qualification", doctor.qualification);
formData.append("consultationFee", doctor.consultationFee);
formData.append("address", doctor.address);
formData.append("description", doctor.description);
formData.append("password", doctor.password);
formData.append("image", doctor.image);


  // const result = doctorSchema.safeParse(doctor);

  // console.log(result)
  // if (!result.success) {
  //   const fieldErrors = {};

  //   result.error.issues.forEach((err) => {
  //     fieldErrors[err.path[0]] = err.message;
  //   });

  //   setErrors(fieldErrors);
  //   return;
  // }

  // setErrors({});

  try {
    setLoading(true);

    await axios.post("/doctors/create", formData);
    alert("Doctor added successfully");
    navigate("/dashboard/doctors");
  } catch (error) {
    alert(error.response?.data?.message || "Unable to add doctor");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-sm text-white">
      <div className="border border-gray-700 rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Add New Doctor</h1>

        <form
          method="POST"
        encType="multipart/form-data"
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
              className="w-full border border-gray-700 bg-gray-800 p-3 rounded"
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
              className="w-full border border-gray-700 bg-gray-800 p-3 rounded"
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
              className="w-full border border-gray-700 bg-gray-800 p-3 rounded"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label>Gender</label>
            <select
              name="gender"
              value={doctor.gender}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800 p-3 rounded"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>

          {/* Specialty */}
          <div>
            <label>Specialty</label>
            <select
              name="department"
              value={doctor.department}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800 p-3 rounded"
            >
              <option value="">Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Ophthalmology">Ophthalmology</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Orthopedic">Orthopedic</option>
              <option value="General Physician">General Physician</option>
            </select>
            {errors.specialty && (
              <p className="text-red-500 text-sm">{errors.department}</p>
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
              className="w-full border border-gray-700 bg-gray-800 p-3 rounded"
            />
            {errors.experience && (
              <p className="text-red-500 text-sm">{errors.experience}</p>
            )}
          </div>

          {/* Qualification */}
          <div>
            <label>Qualification</label>
            <input
              name="qualification"
              value={doctor.qualification}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800 p-3 rounded"
            />
            {errors.qualification && (
              <p className="text-red-500 text-sm">{errors.qualification}</p>
            )}
          </div>

          {/* Consultation Fee */}
          <div>
            <label>Consultation Fee</label>
            <input
              name="consultationFee"
              type="number"
              value={doctor.consultationFee}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800 p-3 rounded"
            />
            {errors.consultationFee && (
              <p className="text-red-500 text-sm">{errors.consultationFee}</p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label>Address</label>
            <textarea
              name="address"
              value={doctor.address}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800 p-3 rounded"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label>Description</label>
            <textarea
              name="description"
              value={doctor.description}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800 p-3 rounded"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          {/* Image */}
          <div>
            <div>
              <label>Doctor Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full border border-gray-700 bg-gray-800 p-3 rounded"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={doctor.password}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800 p-3 rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 disabled:bg-blue-400 text-white px-6 py-3 rounded"
            >
              {loading ? "Adding..." : "Add Doctor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

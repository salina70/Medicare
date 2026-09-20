// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// // import ConsultForm from "./consultForm";

// function DepartmentDoctor() {
//   const { id } = useParams();
//   const [doctors, setDoctors] = useState([]);

//   const [form, setForm] = useState(false);

//   useEffect(() => {
//     const eachDepartment = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:8000/api/departments/${id}`,
//         );

//         console.log(res.data.message);

//         setDoctors(res.data.message);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     eachDepartment();
//   }, [id]);

// useEffect(() => {
//   console.log("Doctors state:", doctors);
// }, [doctors]);
//   return (
//     <div className="min-h-screen bg-gray-50 px-6 pt-4">
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto mb-5">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Doctors
//         </h1>
//         {/* <ConsultForm /> */}

//         <p className="text-gray-500 mt-2">
//           Choose a doctor and book your consultation.
//         </p>
//       </div>

//       {/* Doctor Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//        {doctors.map((item, idx)=>{
//         return (
//           <div key={idx}> 
//           <p>hii</p>
// <p>{item.fullName}</p>
//             </div>
//         )
//        })}
//       </div>
      
      
//       {form && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
//           <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
//             {/* Close */}
//             <button
//               onClick={() => setForm(false)}
//               className="absolute right-4 top-3 text-2xl text-gray-400 hover:text-gray-700"
//             >
//               ×
//             </button>

//             <Form  />
//           </div>
//         </div>
//       )}

//       {/* No doctors */}
//       {doctors.length === 0 && (
//         <div className="text-center mt-16">
//           <p className="text-gray-500 text-lg">
//             No doctors found in this department.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DepartmentDoctor;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DepartmentDoctor() {
  const { id } = useParams();

  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/departments/${id}`
        );

        console.log("Doctors:", res.data.message);
        setDoctors(res.data.message);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 sm:px-6 py-8">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
      

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Find Your Doctor
        </h1>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Choose from our experienced and trusted doctors and book your
          consultation today.
        </p>
      </div>

      {/* Doctor Cards */}
      {doctors.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {doctors.map((doctor) => (
            <div
              key={doctor._id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top Section */}
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 h-24">
                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <img
                      src={doctor.image}
                      alt={doctor.fullName}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                    />

                    {/* Online indicator */}
                    <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></span>
                  </div>
                </div>
              </div>

              {/* Doctor Information */}
              <div className="pt-16 px-5 pb-5 text-center">

                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                  Dr. {doctor.fullName}
                </h2>

                <p className="text-blue-600 font-medium text-sm mt-1">
                  {doctor.qualification}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mt-3">
                  <span className="text-yellow-400 text-lg">★</span>

                  <span className="font-semibold text-gray-700">
                    {doctor.rating || "4.8"}
                  </span>

                  <span className="text-gray-400 text-sm">
                    / 5.0
                  </span>
                </div>

                {/* Details */}
                <div className="mt-5 space-y-3 text-sm">

                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2.5">

                    <div className="text-left gap-2 flex">
                      <p className="text-xs text-gray-400">
                        Experience:
                      </p>

                      <p className="font-semibold text-gray-700">
                        {doctor.experience} Years
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2.5">

                    <div className="text-left gap-2 flex">
                      <p className="text-xs text-gray-400">
                        Location:
                      </p>

                      <span className="font-semibold text-gray-700">
                        {doctor.address}
                     </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-green-50 rounded-xl px-3 py-2.5">
                    <span className="text-lg">💰</span>

                    <div className="text-left">
                      <p className="text-xs text-gray-400">
                        Consultation Fee
                      </p>

                      <p className="font-bold text-green-600">
                        Rs. {doctor.consultationFee}
                      </p>
                    </div>
                  </div>
                </div>

              
                {/* Button */}
                <button
                  onClick={() => setForm(true)}
                  className="w-full mt-5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
                >
                  Consult Now
                </button>
              </div>
            </div>
          ))}

        </div>
      ) : (
        /* Empty State */
        <div className="max-w-xl mx-auto text-center mt-20 bg-white rounded-3xl shadow-sm border border-gray-100 p-10">

          <div className="w-20 h-20 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-4xl">
            🩺
          </div>

          <h2 className="text-xl font-bold text-gray-800 mt-5">
            No Doctors Found
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            We couldn't find any doctors available in this department.
            Please try another department.
          </p>
        </div>
      )}

      {/* Consultation Form Modal */}
      {form && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => setForm(false)}
              className="absolute right-4 top-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 text-xl transition"
            >
              ×
            </button>

            <Form />
          </div>
        </div>
      )}

    </div>
  );
}

export default DepartmentDoctor;

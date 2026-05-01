import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { doctors } from "../data/doctor";
import "../main"

function DoctorProfile() {
  let { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === Number(id));

  return (
    <>
      <div className="mt-6">
        <h2 className="text-5xl text-center mb-4 text-green-600">
          {doctor.name} -{" "}
          <span className="text-gray-500 text-3xl">
            {" "}
            {doctor.specialty}
          </span>{" "}
          <p className="text-xl mt-2 text-gray-500"><i class="fa-regular fa-star"></i>No reviews yet</p>
        </h2>
        <div className="flex gap-6">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-50 h-50 object-cover rounded-full object-center"
                />
              </div>
              <div className="flex flex-col gap-2 pt-4 pl-4 text-xl">
                <h2>Experience: {doctor.experience}+ years</h2>
                     <h2>Location: {doctor.location}</h2>
                <h2>Fee: Rs {doctor.fee}</h2>
           
                <h2>Rating: {doctor.rating}</h2>
                <button className="mt-4 border-2 border-green-600 bg-green-600 text-xl text-black font-semibold px-2 py-1 rounded-md">
                  Consult Now
                </button>
              </div>
            </div>
            <div className="w-[30rem] ml-4 mt-8 text-xxl justify-text">{doctor.description}</div>
          </div>
          <div className="bg-gray-950 h-90 w-[50rem]">

          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorProfile;

{
  /* <img className='w-70 h-70 object-cover rounded-full object-center' src={doctor.image} alt={doctor.name} />
   
      <p>{doctor.experience} years experience</p>
      <p>Fee: ₹{doctor.fee}</p>
      <button className='border-2 border-green-600 bg-green-600 text-xl text-black font-semibold px-4 py-2 rounded-md'>Consult Now</button>
      <div className='bg-gray-950 h-90 '></div> */
}

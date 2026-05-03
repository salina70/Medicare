import React, { useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { doctors } from "../data/doctor";
import "../main";

function DoctorProfile() {
  const [saved, setSaved] = useState(false);
  const [consult, setConsult] = useState(false);
  let { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === Number(id));

  return (
    <>
      <div className="mt-6">
        <h2 className="text-4xl text-center mb-4 text-green-600">
          {doctor.name} -{" "}
          <span className="text-gray-500 text-2xl"> {doctor.specialty}</span>{" "}
          <p className="text-xl mt-2 text-gray-500">
            <i class="fa-regular fa-star"></i>No reviews yet
          </p>
        </h2>
        <div className="flex gap-6">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-50 h-50 object-cover rounded-xl object-center"
                />
                <div className="absolute top-1 right-1">
                  <i
                    class={`fas fa-heart text-gray-600 text-xl hover:text-red-500 ${saved ? "text-red-600" : "text-gray-500"} `}
                    onClick={() => {
                      setSaved(!saved);
                      alert(
                        saved
                          ? "Removed from favourites"
                          : " Saved to favourites",
                      );
                    }}
                  ></i>
                </div>
              </div>
              <div className="flex flex-col gap-2 pl-4 text-sm">
                <h2>Experience: {doctor.experience}+ years</h2>
                <h2>Education: {doctor.education}</h2>
                <h2>Location: {doctor.location}</h2>
                <h2>Fee: Rs {doctor.fee}</h2>

                <h2>Rating: {doctor.rating}</h2>
                <div className="flex gap-2">
                  <button className="border-green-600 bg-green-500 hover:bg-green-600 w-30 text-sm text-black font-semibold px-1 py-1 rounded-md">
                    Consult Now
                  </button>
                  <button className="border-1 rounded-sm border-green-700 p-1 w-30">
                    Message Doctor
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[30rem] mt-6 text-xs justify-text">
              <h2 className="text-green-200 text-xl">About Doctor</h2>
              <p>{doctor.description}</p>
            </div>
          </div>
          <div className="border-1 border--white rounded-xl h-60 w-[30rem]">
            <h2 className="text-green-200 text-xl pt-2 pl-2">Availability</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorProfile;

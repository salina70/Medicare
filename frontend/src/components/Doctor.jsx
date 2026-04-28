import React from "react";
import { Link } from "react-router-dom";

function Doctor() {
  const doctors = [
    {
      name: "Dr. Aarav Sharma",
      specialty: "Cardiologist",
      experience: 12,
      fee: 1200,
      rating: 4.8,
      image: "../images/dr1.jpg",
    },
    {
      name: "Dr. Priya Verma",
      specialty: "Dermatologist",
      experience: 8,
      fee: 900,
      rating: 4.6,
      image: "../images/dr2.jpg",
    },
    {
      name: "Dr. Rohan Gupta",
      specialty: "Neurologist",
      experience: 15,
      fee: 1500,
      rating: 4.9,
      image: "../images/dr3.jpg",
    },
    {
      name: "Dr. Anjali Singh",
      specialty: "Pediatrician",
      experience: 10,
      fee: 800,
      rating: 4.7,
      image: "../images/dr4.jpg",
    },
    {
      name: "Dr. Sameer Khan",
      specialty: "Orthopedic",
      experience: 14,
      fee: 1100,
      rating: 4.5,
      image: "../images/dr5.jpg",
    },
    {
      name: "Dr. Neha Joshi",
      specialty: "Gynecologist",
      experience: 9,
      fee: 1000,
      rating: 4.7,
      image: "../images/dr6.jpg",
    },
    {
      name: "Dr. Vikram Mehta",
      specialty: "ENT Specialist",
      experience: 11,
      fee: 850,
      rating: 4.4,
      image: "../images/dr7.jpg",
    },
    //   ,
    //   {
    //     name: "Dr. Sneha Reddy",
    //     specialty: "Dentist",
    //     experience: 7,
    //     fee: 700,
    //     rating: 4.6,
    //     image: "../images/dr8.jpg"
    //   },
    //   {
    //     name: "Dr. Amit Pandey",
    //     specialty: "General Physician",
    //     experience: 6,
    //     fee: 500,
    //     rating: 4.3,
    //     image: "../images/dr9.jpg"
    //   },
    //   {
    //     name: "Dr. Kavya Nair",
    //     specialty: "Psychiatrist",
    //     experience: 13,
    //     fee: 1300,
    //     rating: 4.8,
    //     image: "../images/dr10.jpg"
    //   },
    //   {
    //     name: "Dr. Rajat Bhandari",
    //     specialty: "Cardiologist",
    //     experience: 16,
    //     fee: 1600,
    //     rating: 4.9,
    //     image: "../images/dr11.jpg"
    //   }
  ];
  return (
    <div className="my-18 mx-16">
      <div className="flex justify-between">
        <h2 className="text-3xl">Top Doctors</h2>
        <Link to="/all-doctors">
          <button className="border border-green-500 text-green-600 px-2 py-1 rounded-md cursor-pointer hover:text-white transition">
            view all
          </button>
        </Link>
      </div>

      <div
        className="dr-div flex flex-wrap gap-7 mt-8 justify-center 
     w-full"
      >
        {doctors.map((doc, index) => {
          return (
            <div key={index} className="dr-card my-4 w-50 relative">
              <img
                src={doc.image}
                alt={doc.name}
                className="h-40 w-full object-cover object-top"
              />
              <h3 className="font-semibold inline-block text-green-500 mt-2">
                {doc.name}
              </h3>
              <span className="absolute top-0 right-0 text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                ⭐ {doc.rating}
              </span>
              <h4>{doc.specialty}</h4>
              <p className="text-gray-400">{doc.experience}+ experience</p>
              <button className="mt-2 w-40 border border-green-600 text-green-600 py-1 rounded hover:bg-green-600 hover:text-white transition">
                Consult Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Doctor;

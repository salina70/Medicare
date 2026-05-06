import React, { useState } from "react";
import { Link } from "react-router-dom";

function Doctor() {
   const doctors = [
    {
      id:1,
      name: "Dr. Ashma Sharma",
      specialty: "Cardiologist",
      experience: 12,
      fee: 1200,
      rating: 4.8,
      image: "../images/dr1.jpg",
    },
    {
            id:2,

      name: "Dr. Rakesh Verma",
      specialty: "Dermatologist",
      experience: 8,
      fee: 900,
      rating: 4.6,
      image: "../images/dr2.jpg",
    },
    {
      id:3,
      name: "Dr. Rohan Gupta",
      specialty: "Neurologist",
      experience: 15,
      fee: 1500,
      rating: 4.9,
      image: "../images/dr3.jpg",
    },
    {
      id:4,
      name: "Dr. Anjali Singh",
      specialty: "Pediatrician",
      experience: 10,
      fee: 800,
      rating: 4.7,
      image: "../images/dr4.jpg",
    },
    {
      id:5,
      name: "Dr. Sameer Khan",
      specialty: "Orthopedic",
      experience: 14,
      fee: 1100,
      rating: 4.5,
      image: "../images/dr5.jpg",
    },
    {
      id:6,
      name: "Dr. Rohit Joshi",
      specialty: "Gynecologist",
      experience: 9,
      fee: 1000,
      rating: 4.7,
      image: "../images/dr6.jpg",
    },
    {
      id:7,
      name: "Dr. Nirita Mehta",
      specialty: "ENT Specialist",
      experience: 11,
      fee: 850,
      rating: 4.4,
      image: "../images/dr7.jpg",
    },
      ,
      {
        name: "Dr. Sneha Reddy",
        specialty: "Dentist",
        experience: 7,
        fee: 700,
        rating: 4.6,
        image: "../images/dr8.jpg"
      },
      {
        name: "Dr. Amit Pandey",
        specialty: "General Physician",
        experience: 6,
        fee: 500,
        rating: 4.3,
        image: "../images/dr9.jpg"
      },
      {
        name: "Dr. Kavya Nair",
        specialty: "Psychiatrist",
        experience: 13,
        fee: 1300,
        rating: 4.8,
        image: "../images/dr10.jpg"
      },
      {
        name: "Dr. Rajat Bhandari",
        specialty: "Cardiologist",
        experience: 16,
        fee: 1600,
        rating: 4.9,
        image: "../images/dr11.jpg"
      }
  ];
  const [open, setopen] = useState(false)
  
  return (
    <>
    <div className="doc-div my-18 mx-16">
      <div className="top-doc flex justify-between">
        <h2 className="text-3xl top-doctors">Top Doctors</h2>
        <Link to="/all-doctors">
          <button className="view-doc-btn border border-green-500 text-green-600 px-2 py-1 rounded-md cursor-pointer hover:text-white transition">
            view all
          </button>
        </Link>
      </div>

      <div
        className="outer-doc-div grid grid-cols-4"
      >
        {doctors.slice(0,4).map((doc) => {
          
          return (
            <div key={doc.id} className="dr-card my-4 w-50 relative">
                          <Link to={`/doctor/${doc.id}`}>
              <div className="relative group">
              <img
                src={doc.image}
                alt={doc.name}
                className="h-40 w-full object-cover object-top"
              />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
      <span className="text-white font-semibold text-lg">
        View Profile
      </span>
      </div>
    </div>
                </Link>
              <h3 className="font-semibold inline-block text-green-500 mt-2">
                {doc.name}
              </h3>
              <span className="absolute top-0 right-0 text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                ⭐ {doc.rating}
              </span>
              <h4 className="spec-h4">{doc.specialty}</h4>
              <p className="exp text-gray-400">{doc.experience}+ experience</p>
              <button onClick={()=>{alert("Feature is in progress")}} className="consult-btn mt-2 w-40 border border-green-600 text-green-600 py-1 rounded hover:bg-green-600 hover:text-white transition">
                Consult Now
              </button>
            </div>
          
          );
        })}
      </div>
    </div>






    </>
  );

  
}

export default Doctor;

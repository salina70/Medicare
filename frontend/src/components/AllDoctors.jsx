import React from "react";

function AllDoctors() {
  const doctors = [
    {
      name: "Dr. Aarav Sharma",
      specialty: "Cardiologist",
      experience: 12,
      rating: 4.8,
      image: "../images/dr1.jpg",
    },
    {
      name: "Dr. Priya Verma",
      specialty: "Dermatologist",
      experience: 8,
      rating: 4.6,
      image: "../images/dr2.jpg",
    },
    {
      name: "Dr. Rohan Gupta",
      specialty: "Neurologist",
      experience: 15,
      rating: 4.9,
      image: "../images/dr3.jpg",
    },
    {
      name: "Dr. Anjali Singh",
      specialty: "Pediatrician",
      experience: 10,
      rating: 4.7,
      image: "../images/dr4.jpg",
    },
    {
      name: "Dr. Sameer Khan",
      specialty: "Orthopedic",
      experience: 14,
      rating: 4.5,
      image: "../images/dr5.jpg",
    },
    {
      name: "Dr. Neha Joshi",
      specialty: "Gynecologist",
      experience: 9,
      rating: 4.7,
      image: "../images/dr6.jpg",
    },
    {
      name: "Dr. Vikram Mehta",
      specialty: "ENT Specialist",
      experience: 11,
      rating: 4.4,
      image: "../images/dr7.jpg",
    },

    {
      name: "Dr. Sneha Reddy",
      specialty: "Dentist",
      experience: 7,
      fee: 700,
      rating: 4.6,
      image: "../images/dr8.jpg",
    },
    {
      name: "Dr. Amit Pandey",
      specialty: "General Physician",
      experience: 6,
      fee: 500,
      rating: 4.3,
      image: "../images/dr9.jpg",
    },
    {
      name: "Dr. Kavya Nair",
      specialty: "Psychiatrist",
      experience: 13,
      fee: 1300,
      rating: 4.8,
      image: "../images/dr10.jpg",
    },
    {
      name: "Dr. Rajat Bhandari",
      specialty: "Cardiologist",
      experience: 16,
      fee: 1600,
      rating: 4.9,
      image: "../images/dr11.jpg",
    },
  ];

  return (
    <div className="my-10 mx-16">
      {/* Header */}
      <h1 className="text-xl font-bold text-green-600 mb-6">
        Search by specialist{" "}
        <input
          type="text"
          className="border border-gray-400 ml-2 font-normal text-sm px-2 py-1 placeholder:text-xs text-gray-500"
          placeholder="cardiologist, dermatologist"
        />
        <select className="border absolute right-29 border-gray-300 rounded-md px-2 py-2 text-xs focus:outline-none focus:border-green-500">
          <option value="">Sort By</option>
          <option>Experience (High → Low)</option>
          <option>Rating (High → Low)</option>
          <option>Fee (Low → High)</option>
          <option>Fee (High → Low)</option>
        </select>
      </h1>

      {/* Grid */}
      <div className="flex flex-wrap gap-7 justify-center">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="dr-card w-60 relative shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="h-40 w-full object-cover object-top"
            />

            {/* Rating */}
            <span className="absolute top-2 right-2 text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
              ⭐ {doc.rating}
            </span>

            {/* Info */}
            <div className="p-3">
              <h3 className="font-semibold text-green-600">{doc.name}</h3>

              <h4 className="text-gray-700">{doc.specialty}</h4>

              <p className="text-gray-400 text-sm">
                {doc.experience}+ years experience
              </p>

              <button className="mt-2 w-full border border-green-600 text-green-600 py-1 rounded hover:bg-green-600 hover:text-white transition">
                Consult Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllDoctors;

import React, { useState } from "react";
import { doctors } from "../data/doctor";

function AllDoctors() {
  const [search, setSearch] = useState(false);
  return (
    <>
    <div className="my-10 mx-16 outer-doc">
      {/* Header */}

      <div className="alldoc-div flex justify-between">
          <div>
      <h1 className="inline-block text-xl font-bold text-green-600 mb-6">
        Search <span className="spec">by specialist</span> {" "}
         </h1>
       
        <input
          onChange={() => {}}
          type="text"
          className="inline-block search-doctor border border-gray-400 ml-2 font-normal text-sm px-2 py-1 placeholder:text-sm text-gray-200 w-70"
          placeholder="cardiologist, dermatologist"
        />
        </div>
        <div className="opt">
        <select className="sort border border-gray-300 rounded-md px-2 py-2 text-xs focus:outline-none focus:border-green-500">
          <option value="">Sort By</option>
          <option>Experience (High → Low)</option>
          <option>Rating (High → Low)</option>
          <option>Fee (Low → High)</option>
          <option>Fee (High → Low)</option>
        </select>
        </div>
     
</div>
      {/* Grid */}
      <div className="flex flex-wrap gap-7 justify-center">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="dr-card w-50 relative shadow-md rounded-lg overflow-hidden mt-4"
          >
            <img
            loading="lazy"
              src={doc.image}
              alt={doc.name}
              className="h-40 w-full object-cover object-top"
            />

            {/* Rating */}
            <span className="absolute top-0 right-0 text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
              ⭐ {doc.rating}
            </span>

            {/* Info */}
            <div className="p-3 dr-info">
              <h3 className="font-semibold dr-name text-green-600">{doc.name}</h3>

              <h4 className="text-gray-700 speciality">{doc.specialty}</h4>

              <p className="text-gray-400 text-sm dr-exp">
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
    </>
  );
}

export default AllDoctors;

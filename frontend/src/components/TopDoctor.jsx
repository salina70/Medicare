import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/apiService";
import axios from "axios";

function TopDoctor() {
  const [doctor, setdoctor] = useState([]);

  useEffect(() => {
    const getDoc = async () => {
      const data = await axios.get(`${api}/getdoctor`);
      setdoctor(data.data.data);
    };

    getDoc();
  }, []);

  return (
    <div className="bg-gradient-to-b from-teal-200 to-emerald-400 px-18">
      
      {/* Header */}
      <div className="flex justify-between items-center pb-10">
        <h2 className="text-2xl font-semibold">Top Doctors</h2>

        <Link
          to="/find-doctors"
          className="px-4 py-1 border rounded-md border-black bg-gray-100 shadow-lg"
        >
          View all
        </Link>
      </div>

      {/* Doctor Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {doctor.slice(0, 4).map((item) => (
          <article
            key={item._id}
            className="relative w-64 h-72 rounded-xl bg-white shadow-lg overflow-hidden"
          >
            {/* Top background */}
            <div className="bg-emerald-400 h-20 rounded-t-xl"></div>

            {/* Doctor content */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full flex flex-col items-center">
              
              {/* Profile */}
              <figure>
                <img
                  className="h-28 w-28 rounded-full object-cover border-4 border-white shadow-md"
                  src={item.profile}
                  alt={item.name}
                />
              </figure>

              {/* Doctor information */}
              <strong className="text-xl mt-2 text-center">
                {item.name}
              </strong>

              <span className="text-gray-600 uppercase text-sm">
                {item.specialization}
              </span>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <button className="bg-emerald-500 text-white px-4 py-1.5 rounded-md hover:bg-emerald-600">
                  Consult Now
                </button>

               
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default TopDoctor;
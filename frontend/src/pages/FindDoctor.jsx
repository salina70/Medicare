import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import api from "../../utils/apiService";

function FindDoctor() {
  const [val, setVal] = useState("");
  const [dept, setDept] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [specialist, setSpecialist] = useState("");

  const searchLogic = (e) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    let specialistName = async () => {
      let data = await axios.get(`${api}/getdoctor`);
      setDept(data.data.data);
    };

    specialistName();
  }, []);

  const selectedDoctors = [...dept].sort((a, b) => {
    if (sortBy === "highrating") {
      return b.rating - a.rating;
    }

    if (sortBy === "highexperience") {
      return b.experience - a.experience;
    }

    if (sortBy === "lowexperience") {
      return a.experience - b.experience;
    }

    return 0;
  });

  const specializations = [
    ...new Set(dept?.map((item) => item.specialization)),
  ];
  console.log(specialist);
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-gray-200 px-18 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-emerald-600">
          Medicare
        </Link>

        {/* Search */}
        <div className="relative w-96">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>

          <input
            className="w-full border border-gray-300 rounded-full pl-11 pr-4 py-2.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
            value={val}
            type="text"
            placeholder="Search doctors..."
            onChange={searchLogic}
          />
        </div>

        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg transition">
          Logout
        </button>
      </nav>

      {/* Filters */}
      <section className="mx-18 rounded-xl p-5">
        <div className="flex items-center gap-5 flex-wrap">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Speciality
            </label>

            <select value={specialist} onChange={(e)=>{setSpecialist(e.target.value)}} className="border border-gray-300 px-4 py-2 rounded-md" name="" id="">
              <option disabled value="">Select Speciality</option>
              {specializations.map((item, idx)=>(
                <option key={idx}>{item}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Sort by
            </label>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-emerald-500"
            >
              <option value="" disabled>
                Sort by
              </option>

              <option value="highrating">Rating: high to low</option>

              <option value="highexperience">Experience: high to low</option>

              <option value="lowexperience">Experience: low to high</option>
            </select>
          </div>
        </div>
      </section>

      {/* Doctors */}

      <main className="flex flex-wrap gap-6 justify-center">
        {dept.map((item) => (
          <article
            key={item._id}
            className="h-74 hover:shadow-xl shadow-gray hover:scale-101"
          >
            <div className="bg-emerald-400 h-20 rounded-t-md w-84 flex justify-center">
              <figure>
                <img
                  className="h-28 object-cover mt-6 w-28 border-b-4 rounded-full border-emerald-500"
                  src={item.profile}
                  alt={item.name}
                />
              </figure>
            </div>
            <div className="mt-15 flex flex-col justify-center items-center">
              <strong className="text-xl">{item.name}</strong>
              <span className="uppercase mb-2 text-emerald-500">
                {item.specialization}
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <button className="bg-emerald-500 hover:bg-emerald-700 px-10 py-2 mt-2 text-white rounded-xl">
                Consult Now
              </button>
            </div>
          </article>
        ))}
      </main>
      {sortBy &&
        selectedDoctors.map((item) => (
          <article
            key={item._id}
            className="h-74 hover:shadow-xl shadow-gray hover:scale-101"
          >
            <div className="bg-emerald-400 h-20 rounded-t-md w-84 flex justify-center">
              <figure>
                <img
                  className="h-28 object-cover mt-6 w-28 border-b-4 rounded-full border-emerald-500"
                  src={item.profile}
                  alt={item.name}
                />
              </figure>
            </div>
            <div className="mt-15 flex flex-col justify-center items-center">
              <strong className="text-xl">{item.name}</strong>
              <span className="uppercase mb-2 text-emerald-500">
                {item.specialization}
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
              <button className="bg-emerald-500 hover:bg-emerald-700 px-10 py-2 mt-2 text-white rounded-xl">
                Consult Now
              </button>
            </div>
          </article>
        ))}
    </div>
  );
}

export default FindDoctor;

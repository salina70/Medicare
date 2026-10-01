import React from "react";
import { gsap } from "gsap";



function Hero() {
  return (
    <section className="min-h-[60vh] mt-15 pb-1 flex flex-col justify-center px-18 items-center bg-gradient-to-b from-emerald-400 to-teal-200 px-6">
      <div className="text-center mb-8">
        <p className=" font-semibold mb-3">
          Your Health, Our Priority
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Find the Right Doctor for You
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          Search for doctors by department, symptom, specialty, or location.
        </p>
      </div>

      <form className="w-full max-w-3xl flex flex-col md:flex-row items-center gap-2 bg-white rounded-xl shadow-lg p-2 border border-gray-100">
        <div className="flex-1 w-full flex items-center">
          <span className="text-emerald-600 px-4 text-lg">⌕</span>

          <input
            className="w-full px-2 py-4 outline-none text-gray-700 placeholder-gray-400"
            type="text"
            placeholder="Department, symptom or doctor"
          />
        </div>

        <div className="hidden md:block h-8 w-px bg-gray-200"></div>

        <div className="flex-1 w-full flex items-center">

          <input
            className="w-full px-2 py-4 outline-none text-gray-700 placeholder-gray-400"
            type="text"
            placeholder="Enter location"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-emerald-600 text-white px-7 py-4 rounded-lg font-medium hover:bg-emerald-700 transition duration-200"
        >
          Search
        </button>
      </form>
    </section>
  );
}

export default Hero;
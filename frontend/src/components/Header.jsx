import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full fixed border-none top-0 z-1000 bg-emerald-400 text-black shadow-sm px-18">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight"
        >
          Medicare
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            to="/find-doctors"
            className="font-medium hover:text-white transition-colors duration-200"
          >
            Find Doctors
          </Link>

          <Link
            to="/book-appointment"
            className=" font-medium hover:text-white transition-colors duration-200"
          >
            Book Appointment
          </Link>

          <Link
            to="/login"
            className=" font-medium hover:text-white transition-colors duration-200"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-white border-green-700 text-black px-5 py-2.5 rounded-lg font-medium hover:text-white hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

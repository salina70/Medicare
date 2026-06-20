import React from "react";
import { NavLink } from "react-router-dom";

function AdminDashboard() {
  const menuItems = [
    { name: "Homepage", path: "/" },
    { name: "Dashboard", path: "/dashboard/admin" },
    { name: "Patients", path: "/dashboard/patients" },
    { name: "Doctors", path: "/dashboard/doctors" },
    { name: "Appointments", path: "/dashboard/appointments" },
    { name: "Schedules", path: "/dashboard/schedules" },
    { name: "Payments", path: "/dashboard/payments" },
    { name: "Reports", path: "/dashboard/reports" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* LEFT SIDEBAR */}
      <div className="left w-46 bg-white shadow-md flex flex-col gap-2 p-3">
        <h2 className="text-xl font-bold text-green-600 mb-4">Admin Panel</h2>
        {menuItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition font-medium ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-green-100"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div className="right flex-1 p-6">
        {/* Your pages will render here using Outlet */}
        <h1 className="text-2xl font-semibold text-gray-700">
          Welcome to Admin Dashboard
        </h1>
      </div>
    </div>
  );
}

export default AdminDashboard;

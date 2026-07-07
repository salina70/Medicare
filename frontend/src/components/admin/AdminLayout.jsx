import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard/admin" },
    { name: "Doctors", path: "/dashboard/doctors" },
    // { name: "Add Doctor", path: "/dashboard/add-doctor" },
    { name: "Patients", path: "/dashboard/patients" },
    { name: "Appointments", path: "/dashboard/appointments" },
    {name:"Symptoms", path:"/dashboard/symptoms"},
    {name:"Departments", path:"/dashboard/departments"}
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 text-sm w-screen">
      {/* Sidebar */}
      <aside className="w-52 bg-blue-900 text-white min-h-screen">
        <div className="px-4 py-4 text-xl font-bold border-b border-blue-700">
          Medicare
        </div>

        <nav className="mt-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-6 py-3 transition ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* RIGHT SIDE CONTENT */}
      <main className="flex-1 p-6 overflow-y-auto h-screen">
        <Outlet />
      </main>
    </div>
  );
}

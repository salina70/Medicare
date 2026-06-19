import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const menuItems = [
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
    <div className="min-h-screen flex bg-gray-100 text-sm w-screen">

      {/* Sidebar */}
      <aside className="w-52 bg-blue-900 text-white min-h-screen">
        <div className="px-4 py-4 text-xl font-bold border-b border-blue-700">
          Medicare
        </div>

        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-6 py-3 hover:bg-blue-800 transition"
            >
              {item.name}
            </Link>
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
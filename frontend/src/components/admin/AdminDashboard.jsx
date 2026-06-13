import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const stats = [
    { title: "Patients", value: "1,250" },
    { title: "Doctors", value: "75" },
    { title: "Today's Appointments", value: "45" },
    { title: "Revenue", value: "$12,500" },
  ];

  const appointments = [
    {
      id: 1001,
      patient: "John Doe",
      doctor: "Dr. Smith",
      date: "2026-06-11",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 1002,
      patient: "Sarah Lee",
      doctor: "Dr. Wilson",
      date: "2026-06-11",
      time: "11:30 AM",
      status: "Pending",
    },
    {
      id: 1003,
      patient: "Michael Brown",
      doctor: "Dr. Adams",
      date: "2026-06-11",
      time: "02:00 PM",
      status: "Completed",
    },
  ];

  const menuItems = [
    { name: "Dashboard", path:"/dashboard/admin" },
    { name: "Patients", path: "/dashboard/add-doctor" },
    { name: "Doctors", path: "/dashboard/add-doctor" },
    { name: "Appointments", path:"/dashboard/appointments" },
    { name: "Schedules", path:"/dashboard/schedules" },
    { name: "Payments", path:"/dashboard/payments" },
    { name: "Reports" , path:"/dashboard/reports"},
    { name: "Settings" , path:"/dashboard/settings"},
  ];

  return (
 <div className="min-h-screen flex bg-gray-100 text-sm fixed w-screen">
    {/* Sidebar */}
    <aside className="w-40  bg-blue-900 text-white min-h-screen">
      <div className="px-4 py-4 text-xl font-bold border-b border-blue-700">
        Medicare
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path || "#"}
            className="block px-6 py-3 hover:bg-blue-800 transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>


      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto h-screen hide-scrollbar">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

          <div className="bg-blue-500 px-4 py-2 rounded-lg shadow">Admin User</div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((card) => (
            <div key={card.title} className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-gray-500 text-sm">{card.title}</h3>
              <p className="text-3xl font-bold text-blue-700 mt-2">
                {card.value}
              </p>
            </div>
          ))}
        </div>

     

        {/* Recent Appointments */}
        <div className="bg-white rounded-xl shadow text-black">
          <div className="p-5 border-b">
            <h2 className="text-xl font-semibold">Recent Appointments</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4">ID</th>
                  <th className="text-left p-4">Patient</th>
                  <th className="text-left p-4">Doctor</th>
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Time</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{appt.id}</td>
                    <td className="p-4">{appt.patient}</td>
                    <td className="p-4">{appt.doctor}</td>
                    <td className="p-4">{appt.date}</td>
                    <td className="p-4">{appt.time}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          appt.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : appt.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {appt.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

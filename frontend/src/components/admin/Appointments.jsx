import React, { useState } from "react";
import { Search, Eye, Trash2, X, CheckCircle, XCircle } from "lucide-react";

function Appointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "Ram Sharma",
      doctor: "Dr. Singh",
      date: "2026-06-15",
      time: "10:00 AM",
      reason: "Fever Checkup",
      status: "Pending",
    },
    {
      id: 2,
      patientName: "Sita Karki",
      doctor: "Dr. Patel",
      date: "2026-06-16",
      time: "12:30 PM",
      reason: "Diabetes Follow-up",
      status: "Confirmed",
    },
    {
      id: 3,
      patientName: "Hari Thapa",
      doctor: "Dr. Rana",
      date: "2026-06-17",
      time: "09:00 AM",
      reason: "Heart Checkup",
      status: "Cancelled",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = appointments.filter((a) =>
    a.patientName.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const ok = window.confirm("Delete this appointment?");
    if (!ok) return;

    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  const handleStatus = (id, status) => {
    setAppointments((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status } : a
      )
    );
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">
          Appointments
        </h1>

        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search Patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-700 rounded-xl">
        <table className="w-full text-gray-200">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Patient</th>
              <th className="p-4 text-left">Doctor</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((a) => (
              <tr
                key={a.id}
                className="border-b border-gray-700 hover:bg-gray-800"
              >
                <td className="p-4">{a.id}</td>
                <td className="p-4">{a.patientName}</td>
                <td className="p-4">{a.doctor}</td>
                <td className="p-4">{a.date}</td>
                <td className="p-4">{a.time}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      a.status === "Confirmed"
                        ? "bg-green-900 text-green-400"
                        : a.status === "Cancelled"
                        ? "bg-red-900 text-red-400"
                        : "bg-yellow-900 text-yellow-400"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => setSelected(a)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => handleStatus(a.id, "Confirmed")}
                      className="text-green-400 hover:text-green-300"
                    >
                      <CheckCircle size={18} />
                    </button>

                    <button
                      onClick={() => handleStatus(a.id, "Cancelled")}
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      <XCircle size={18} />
                    </button>

                    <button
                      onClick={() => handleDelete(a.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No Appointments Found
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-700 text-white p-6 rounded-xl w-[400px] relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-400"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold mb-4">
              Appointment Details
            </h2>

            <div className="space-y-2">
              <p><strong>Patient:</strong> {selected.patientName}</p>
              <p><strong>Doctor:</strong> {selected.doctor}</p>
              <p><strong>Date:</strong> {selected.date}</p>
              <p><strong>Time:</strong> {selected.time}</p>
              <p><strong>Reason:</strong> {selected.reason}</p>
              <p><strong>Status:</strong> {selected.status}</p>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;
import React, { useState } from "react";
import { Search, Eye, Trash2, X } from "lucide-react";

function Patients() {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Ram Sharma",
      age: 25,
      gender: "Male",
      phone: "9800000001",
      disease: "Fever",
      status: "Active",
    },
    {
      id: 2,
      name: "Sita Karki",
      age: 30,
      gender: "Female",
      phone: "9800000002",
      disease: "Diabetes",
      status: "Active",
    },
    {
      id: 3,
      name: "Hari Thapa",
      age: 45,
      gender: "Male",
      phone: "9800000003",
      disease: "Heart Disease",
      status: "Inactive",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleView = (patient) => {
    setSelectedPatient(patient);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this patient?"
    );

    if (!confirmDelete) return;

    setPatients((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Patients</h1>

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />
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
              <th className="p-4 text-left">Patient Name</th>
              <th className="p-4 text-left">Age</th>
              <th className="p-4 text-left">Gender</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Disease</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.map((patient) => (
              <tr
                key={patient.id}
                className="border-b border-gray-700 hover:bg-gray-800"
              >
                <td className="p-4">{patient.id}</td>
                <td className="p-4">{patient.name}</td>
                <td className="p-4">{patient.age}</td>
                <td className="p-4">{patient.gender}</td>
                <td className="p-4">{patient.phone}</td>
                <td className="p-4">{patient.disease}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      patient.status === "Active"
                        ? "bg-green-900 text-green-400"
                        : "bg-red-900 text-red-400"
                    }`}
                  >
                    {patient.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => handleView(patient)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => handleDelete(patient.id)}
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

        {filteredPatients.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No Patients Found
          </div>
        )}
      </div>

      {/* View Modal */}
      {selectedPatient && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-700 text-white rounded-xl p-6 w-[400px] relative">
            <button
              onClick={() => setSelectedPatient(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-400"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold mb-4">
              Patient Details
            </h2>

            <div className="space-y-3">
              <p><strong>ID:</strong> {selectedPatient.id}</p>
              <p><strong>Name:</strong> {selectedPatient.name}</p>
              <p><strong>Age:</strong> {selectedPatient.age}</p>
              <p><strong>Gender:</strong> {selectedPatient.gender}</p>
              <p><strong>Phone:</strong> {selectedPatient.phone}</p>
              <p><strong>Disease:</strong> {selectedPatient.disease}</p>
              <p><strong>Status:</strong> {selectedPatient.status}</p>
            </div>

            <button
              onClick={() => setSelectedPatient(null)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Patients;
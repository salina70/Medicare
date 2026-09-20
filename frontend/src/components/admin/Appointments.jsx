import { useEffect, useMemo, useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [departmentFilter, setDepartmentFilter] = useState("All");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // ==============================
  // FETCH APPOINTMENTS
  // ==============================

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("http://localhost:8000/api/appointments");

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch appointments");
      }

      setAppointments(data.appointments || []);
    } catch (error) {
      console.error(error);
      setError(error.message || "Unable to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // ==============================
  // UPDATE STATUS
  // ==============================

  const updateStatus = async (id, status) => {
    try {
      setError("");
      setMessage("");

      const response = await fetch(
        `http://localhost:8000/api/appointments/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update appointment");
      }

      setMessage(`Appointment ${status.toLowerCase()} successfully`);

      fetchAppointments();
    } catch (error) {
      console.error(error);
      setError(error.message || "Failed to update appointment");
    }
  };

  // ==============================
  // DELETE APPOINTMENT
  // ==============================

  const deleteAppointment = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this appointment?",
    );

    if (!confirmed) return;

    try {
      setError("");
      setMessage("");

      const response = await fetch(
        `http://localhost:8000/api/appointments/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete appointment");
      }

      setMessage("Appointment deleted successfully");

      fetchAppointments();
    } catch (error) {
      console.error(error);
      setError(error.message || "Failed to delete appointment");
    }
  };

  // ==============================
  // STATS
  // ==============================

  const stats = useMemo(() => {
    return {
      total: appointments.length,

      pending: appointments.filter(
        (appointment) => appointment.status === "Pending",
      ).length,

      approved: appointments.filter(
        (appointment) => appointment.status === "Approved",
      ).length,

      completed: appointments.filter(
        (appointment) => appointment.status === "Completed",
      ).length,

      cancelled: appointments.filter(
        (appointment) => appointment.status === "Cancelled",
      ).length,
    };
  }, [appointments]);

  // ==============================
  // DEPARTMENTS
  // ==============================

  const departments = useMemo(() => {
    const values = appointments
      .map((appointment) => appointment.department)
      .filter(Boolean);

    return [...new Set(values)];
  }, [appointments]);

  // ==============================
  // FILTER
  // ==============================

  const filteredAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      const patientName = appointment.patient_id?.name || "";

      const doctorName = appointment.doctor_id?.name || "";

      const email = appointment.email || "";

      const phone = appointment.phone || "";

      const searchText = search.toLowerCase();

      const matchesSearch =
        patientName.toLowerCase().includes(searchText) ||
        doctorName.toLowerCase().includes(searchText) ||
        email.toLowerCase().includes(searchText) ||
        phone.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All" || appointment.status === statusFilter;

      const matchesDepartment =
        departmentFilter === "All" ||
        appointment.department === departmentFilter;

      return matchesSearch && matchesStatus && matchesDepartment;
    });
  }, [appointments, search, statusFilter, departmentFilter]);

  // ==============================
  // DATE FORMAT
  // ==============================

  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ==============================
  // STATUS STYLE
  // ==============================

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200";

      case "Approved":
        return "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200";

      case "Completed":
        return "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200";

      case "Cancelled":
        return "bg-red-50 text-red-700 ring-1 ring-inset ring-red-200";

      default:
        return "bg-gray-50 text-gray-700 ring-1 ring-inset ring-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* =====================================
          HEADER
      ====================================== */}

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-2xl shadow-sm">
              📅
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Appointments
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage and monitor all hospital appointments
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={fetchAppointments}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
        >
          ↻ Refresh
        </button>
      </div>

      {/* =====================================
          SUCCESS / ERROR
      ====================================== */}

      {message && (
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          <span>✓</span>
          {message}
        </div>
      )}
      {/* 
      {error && (
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <span>⚠</span>
          {error}
        </div>
      )} */}

      {/* =====================================
          STAT CARDS
      ====================================== */}

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {/* Total */}

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Total</p>

              <p className="mt-2 text-3xl font-bold text-slate-900">
                {stats.total}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
              📅
            </div>
          </div>
        </div>

        {/* Pending */}

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Pending</p>

              <p className="mt-2 text-3xl font-bold text-amber-600">
                {stats.pending}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl">
              ⏳
            </div>
          </div>
        </div>

        {/* Approved */}

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Approved</p>

              <p className="mt-2 text-3xl font-bold text-blue-600">
                {stats.approved}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
              ✓
            </div>
          </div>
        </div>

        {/* Completed */}

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Completed</p>

              <p className="mt-2 text-3xl font-bold text-emerald-600">
                {stats.completed}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl">
              ✓
            </div>
          </div>
        </div>

        {/* Cancelled */}

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Cancelled</p>

              <p className="mt-2 text-3xl font-bold text-red-600">
                {stats.cancelled}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-xl">
              ✕
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
          APPOINTMENTS CARD
      ====================================== */}

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
        {/* Card Header */}

        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-slate-900">
              All Appointments
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Search and manage patient appointments
            </p>
          </div>

          {/* Filters */}

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {/* Search */}

            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                🔍
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search patient, doctor..."
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Status */}

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            >
              <option value="All">All Status</option>

              <option value="Pending">Pending</option>

              <option value="Approved">Approved</option>

              <option value="Completed">Completed</option>

              <option value="Cancelled">Cancelled</option>
            </select>

            {/* Department */}

            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            >
              <option value="All">All Departments</option>

              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* =====================================
            LOADING
        ====================================== */}

        {loading ? (
          <div className="flex flex-col items-center justify-center px-6 py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>

            <p className="mt-4 text-sm text-slate-500">
              Loading appointments...
            </p>
          </div>
        ) : filteredAppointments.length === 0 ? (
          /* =====================================
              EMPTY
          ====================================== */

          <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-3xl">
              📅
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              No appointments found
            </h3>

            <p className="mt-1 max-w-sm text-sm text-slate-500">
              No appointments match your current search or filters.
            </p>
          </div>
        ) : (
          /* =====================================
              TABLE
          ====================================== */

          <div className="overflow-x-auto">
            <table className="min-w-[1100px] w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Patient
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Doctor
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Department
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Date & Time
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Status
                  </th>

                  <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredAppointments.map((appointment) => {
                  const patient = appointment.patient_id;

                  const doctor = appointment.doctor_id;

                  return (
                    <tr
                      key={appointment._id}
                      className="transition hover:bg-slate-50"
                    >
                      {/* Patient */}

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                            {patient?.name?.charAt(0)?.toUpperCase() || "P"}
                          </div>

                          <div>
                            <p className="font-semibold text-slate-900">
                              {patient?.name || "Unknown Patient"}
                            </p>

                            <p className="text-xs text-slate-500">
                              {appointment.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Doctor */}

                      <td className="px-5 py-4">
                        <p className="font-medium text-slate-800">
                          {doctor?.name
                            ? `Dr. ${doctor.name}`
                            : "Unknown Doctor"}
                        </p>

                        <p className="text-xs text-slate-500">
                          {appointment.phone}
                        </p>
                      </td>

                      {/* Department */}

                      <td className="px-5 py-4">
                        <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700">
                          {appointment.department || "General"}
                        </span>
                      </td>

                      {/* Date */}

                      <td className="px-5 py-4">
                        <p className="font-medium text-slate-800">
                          {formatDate(appointment.dateTime)}
                        </p>

                        <p className="text-xs text-slate-500">
                          {formatTime(appointment.dateTime)}
                        </p>
                      </td>

                      {/* Status */}

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                            appointment.status,
                          )}`}
                        >
                          {appointment.status}
                        </span>
                      </td>

                      {/* Actions */}

                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          {/* Pending */}

                          {appointment.status === "Pending" && (
                            <button
                              onClick={() =>
                                updateStatus(appointment._id, "Approved")
                              }
                              className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                            >
                              Approve
                            </button>
                          )}

                          {/* Approved */}

                          {appointment.status === "Approved" && (
                            <button
                              onClick={() =>
                                updateStatus(appointment._id, "Completed")
                              }
                              className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
                            >
                              Complete
                            </button>
                          )}

                          {/* Cancel */}

                          {appointment.status !== "Cancelled" &&
                            appointment.status !== "Completed" && (
                              <button
                                onClick={() =>
                                  updateStatus(appointment._id, "Cancelled")
                                }
                                className="rounded-lg bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-200 transition hover:bg-amber-100"
                              >
                                Cancel
                              </button>
                            )}

                          {/* Delete */}

                          <button
                            onClick={() => deleteAppointment(appointment._id)}
                            className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 ring-1 ring-inset ring-red-200 transition hover:bg-red-100"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Footer */}

        {!loading && filteredAppointments.length > 0 && (
          <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {filteredAppointments.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700">
                {appointments.length}
              </span>{" "}
              appointments
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;

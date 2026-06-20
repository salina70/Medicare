import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarClock, Stethoscope, Users, UserRoundPlus } from "lucide-react";
import { useAxios } from "../../lib/provider/axios";

function AdminDashboard() {
  const { axios } = useAxios();
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const quickActions = [
    { name: "Manage Doctors", path: "/dashboard/doctors" },
    { name: "Add Doctor", path: "/dashboard/add-doctor" },
    { name: "View Patients", path: "/dashboard/patients" },
    { name: "Appointments", path: "/dashboard/appointments" },
  ];

  useEffect(() => {
    let ignore = false;

    axios
      .get("/admin/dashboard")
      .then((res) => {
        if (!ignore) setDashboard(res.data);
      })
      .catch((err) => {
        if (!ignore) {
          setError(err.response?.data?.message || "Unable to load dashboard");
        }
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
    // useAxios creates the client for this component; this load should run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxRegistrations = useMemo(() => {
    const counts = dashboard?.patientRegistrationGraph?.map((item) => item.count) || [0];
    return Math.max(...counts, 1);
  }, [dashboard]);

  const summaryCards = [
    {
      label: "Patients",
      value: dashboard?.summary?.totalPatients || 0,
      icon: Users,
    },
    {
      label: "Doctors",
      value: dashboard?.summary?.totalDoctors || 0,
      icon: Stethoscope,
    },
    {
      label: "Today",
      value: dashboard?.summary?.appointmentsToday || 0,
      icon: CalendarClock,
    },
    {
      label: "Pending",
      value: dashboard?.summary?.pendingAppointments || 0,
      icon: UserRoundPlus,
    },
  ];

  const formatTime = (dateTime) =>
    new Date(dateTime).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-gray-400">
            Manage doctors, patients, and appointments for Medicare.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {quickActions.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="rounded border border-gray-700 bg-gray-800 px-4 py-2 text-sm transition hover:border-green-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {error && (
        <div className="mt-6 rounded border border-red-800 bg-red-950 px-4 py-3 text-red-200">
          {error}
        </div>
      )}

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.label} className="rounded-lg border border-gray-700 bg-gray-800 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">{card.label}</p>
                <Icon size={20} className="text-green-400" />
              </div>
              <p className="mt-3 text-3xl font-bold">{loading ? "--" : card.value}</p>
            </div>
          );
        })}
>>>>>>> 6db22a39d92bd30f3a66baa69edfd027054a8058
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <section className="rounded-lg border border-gray-700 bg-gray-800">
          <div className="border-b border-gray-700 px-5 py-4">
            <h2 className="text-xl font-semibold">New Patients</h2>
            <p className="mt-1 text-sm text-gray-400">Latest 5 registered patients</p>
          </div>

          <div className="divide-y divide-gray-700">
            {loading && <p className="p-5 text-gray-400">Loading patients...</p>}
            {!loading && dashboard?.latestPatients?.length === 0 && (
              <p className="p-5 text-gray-400">No patients found</p>
            )}
            {dashboard?.latestPatients?.map((patient) => (
              <div key={patient._id} className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm text-gray-400">{patient.email}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {new Date(patient.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-gray-700 bg-gray-800">
          <div className="border-b border-gray-700 px-5 py-4">
            <h2 className="text-xl font-semibold">New Patients Registered</h2>
            <p className="mt-1 text-sm text-gray-400">Last 7 days</p>
          </div>

          <div className="flex h-72 items-end gap-3 px-5 pb-5 pt-8">
            {(dashboard?.patientRegistrationGraph || []).map((item) => (
              <div key={item.date} className="flex h-full flex-1 flex-col justify-end gap-2">
                <div className="flex min-h-0 flex-1 items-end">
                  <div
                    className="w-full rounded-t bg-green-500 transition-all"
                    style={{
                      height: `${Math.max((item.count / maxRegistrations) * 100, item.count ? 12 : 3)}%`,
                    }}
                    title={`${item.count} patients`}
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold">{item.count}</p>
                  <p className="text-xs text-gray-400">{item.label}</p>
                </div>
              </div>
            ))}
            {!loading && dashboard?.patientRegistrationGraph?.length === 0 && (
              <p className="w-full self-center text-center text-gray-400">No registration data</p>
            )}
            {loading && <p className="w-full self-center text-center text-gray-400">Loading graph...</p>}
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-lg border border-gray-700 bg-gray-800">
        <div className="border-b border-gray-700 px-5 py-4">
          <h2 className="text-xl font-semibold">Appointments Today</h2>
          <p className="mt-1 text-sm text-gray-400">Top 10 appointments scheduled for today</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900 text-gray-400">
              <tr>
                <th className="px-5 py-3">Time</th>
                <th className="px-5 py-3">Patient</th>
                <th className="px-5 py-3">Doctor</th>
                <th className="px-5 py-3">Reason</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {dashboard?.todayAppointments?.map((appointment) => (
                <tr key={appointment._id}>
                  <td className="px-5 py-4">{formatTime(appointment.dateTime)}</td>
                  <td className="px-5 py-4">
                    <p className="font-medium">{appointment.patient_id?.name || "Unknown"}</p>
                    <p className="text-xs text-gray-400">{appointment.email}</p>
                  </td>
                  <td className="px-5 py-4">
                    <p>{appointment.doctor_id?.name || "Unknown"}</p>
                    <p className="text-xs text-gray-400">{appointment.doctor_id?.specialist}</p>
                  </td>
                  <td className="max-w-xs px-5 py-4 text-gray-300">{appointment.description}</td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-yellow-900 px-3 py-1 text-xs text-yellow-200">
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {loading && <p className="p-5 text-center text-gray-400">Loading appointments...</p>}
          {!loading && dashboard?.todayAppointments?.length === 0 && (
            <p className="p-5 text-center text-gray-400">No appointments today</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;

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
    {name: "Add Symptom" , path:"/dashboard/symptoms"},
    {name:"Add Department", path:"/dashboard/departments"}
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
    </div>
    )}
    

export default AdminDashboard;

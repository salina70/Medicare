import React, { useState } from "react";
import {
  Home,
  LayoutDashboard,
  Calendar,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slice/authSlice";

export function PatientDashboard() {
  const [active, setActive] = useState("dashboard");
  const nav = useNavigate();

  const menu = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()

  const LogoutUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/logout",
        {},
        { withCredentials: true },
      );
      console.log(res);
      localStorage.removeItem("token");
      dispatch(logout())
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  const renderContent = () => {
    switch (active) {
      case "dashboard":
        return (
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-400 mt-2">
              Welcome to your patient dashboard
            </p>
          </div>
        );

      case "appointments":
        return (
          <div>
            <h1 className="text-xl font-bold">My Appointments</h1>
            <p className="text-gray-400 mt-2">
              List of your booked appointments
            </p>
          </div>
        );

      case "profile":
        return (
          <div>
            <h1 className="text-2xl font-bold">My Profile</h1>
            <p className="text-gray-400 mt-2">
              Update your personal information
            </p>
          </div>
        );

      case "settings":
        return (
          <div>
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-gray-400 mt-2">Manage account settings</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-54 bg-gray-950 border-r border-gray-800 p-3 flex flex-col">
        <h1 className="text-xl font-bold mb-8">Patient Panel</h1>

        <nav className="flex-1 space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === "home") {
                    nav("/");
                  }
                  setActive(item.id);
                }}
                className={`flex items-center gap-3 w-full p-3 rounded-lg transition ${
                  active === item.id ? "bg-green-600" : "hover:bg-gray-800"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          onClick={LogoutUser}

          className="flex items-center gap-3 p-3 mt-auto text-red-400 hover:bg-gray-800 rounded-lg"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">{renderContent()}</div>
    </div>
  );
}

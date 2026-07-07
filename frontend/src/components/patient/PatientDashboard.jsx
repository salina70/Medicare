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

 
  return (
   <div className="p-4">
    <h1>hello</h1>
   </div>
  );
}

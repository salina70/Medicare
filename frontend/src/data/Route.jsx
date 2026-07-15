import { Home, CalendarDays, User, Settings, Stethoscope } from "lucide-react";

export const PatientMenuItems = [
  {
    name: "Home",
    path: "/dashboard/users",
    icon: Home,
  },
  {
    name: "Appointments",
    path: "/dashboard/view-appointments",
    icon: CalendarDays,
  },
  {
    name: "Find Doctors",
    path: "/dashboard/find-doctors",
    icon: Stethoscope,
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: User,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

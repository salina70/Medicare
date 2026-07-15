import { Home, CalendarDays, User, Settings } from "lucide-react";

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

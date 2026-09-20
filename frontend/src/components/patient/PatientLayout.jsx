import { Home, CalendarDays, User, Settings, LogOut } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
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

function PatientLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white shadow-sm">
        <div className="border-b p-6">
          <h1 className="text-2xl font-bold text-emerald-600">CareConnect</h1>

          <p className="mt-1 text-sm text-gray-500">Patient Dashboard</p>
        </div>

        <nav className="space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 transition ${
                  active
                    ? "bg-emerald-600 text-white"
                    : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-6 w-64 px-4">
          <button
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-600 transition hover:bg-red-50"
            onClick={() => navigate("/logout")}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b bg-white px-8">
          <h2 className="text-xl font-semibold">Patient Dashboard</h2>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
              P
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default PatientLayout;

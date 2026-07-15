import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSelector } from "react-redux";
import { PatientMenuItems } from "../../data/Route";

const DashboardRoutes = {
  patient: PatientMenuItems,
};

const DashboardLayout = () => {
  const role = useSelector((state) => state.auth.role);

  const routes = DashboardRoutes[role] ?? [];

  return (
    <div className="flex h-screen overflow-hidden  text-white">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-neutral-800">
        <Sidebar items={routes} />
      </aside>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const token = localStorage.getItem("token");
  if (!token || token === null) return <Navigate to="/login" />;
  return <Outlet />;
}

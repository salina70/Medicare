import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ allowedRoles }) {
  const token = localStorage.getItem("token");
  const role = JSON.parse(localStorage.getItem("user"))?.role;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  console.log("allowedRole", allowedRoles, "role", role);
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

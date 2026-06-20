import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const storedLogin = localStorage.getItem("token");
  const loginData = storedLogin ? JSON.parse(storedLogin) : null;

  if (!loginData?.token)
    return <Navigate to="/login" />;
  return <Outlet />;
}

export function CheckAdmin() {
  const storedLogin = localStorage.getItem("token");
  const loginData = storedLogin ? JSON.parse(storedLogin) : null;

  const isAdmin =
    typeof loginData?.user?.isAdmin === "string"
      ? loginData.user.isAdmin === "true"
      : !!loginData?.user?.isAdmin;

  if (!isAdmin) return <Navigate to="/dashboard/users" />;

  return <Outlet />;
}

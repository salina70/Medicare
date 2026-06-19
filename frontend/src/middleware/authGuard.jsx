import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const loginData = JSON.parse(localStorage.getItem("token"));
  console.log(loginData);

  if (!loginData.token || loginData.token === null)
    return <Navigate to="/login" />;
  return <Outlet />;
}

export function CheckAdmin() {
  const loginData = JSON.parse(localStorage.getItem("token"));

  const isAdmin =
    typeof loginData.user.isAdmin === "string"
      ? loginData.user.isAdmin === "true"
        ? true
        : false
      : loginData.user.isAdmin;

  if (!isAdmin) return <Navigate to="/dashboard/users" />;

  return <Outlet />;
}

import { Navigate, Outlet } from "react-router-dom";

// export function ProtectedRoute() {
//   const storedLogin = localStorage.getItem("token");
//   const loginData = storedLogin ? JSON.parse(storedLogin) : null;

//   if (!loginData?.token)
//     return <Navigate to="/login" />;
//   return <Outlet />;
// }

// export function CheckAdmin() {
//   const storedLogin = localStorage.getItem("token");
//   console.log(storedLogin)
//   const loginData = storedLogin ? storedLogin : null;
// console.log(loginData)

//   if (!loginData) return <Navigate to="/dashboard/admin" />;

//   return <Outlet />;
// }

export function ProtectedRoute({ allowedRoles }) {
  const token = localStorage.getItem("token");
  const role = JSON.parse(localStorage.getItem("user")).role;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  console.log("allowedRole", allowedRoles, "role", role);
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

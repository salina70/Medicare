import { Navigate, Outlet } from "react-router-dom";

// export function ProtectedRoute() {
//   const storedLogin = localStorage.getItem("token");
//   const loginData = storedLogin ? JSON.parse(storedLogin) : null;
     
//   if (!loginData?.token)
//     return <Navigate to="/login" />;
//   return <Outlet />;
// }

export function CheckAdmin() {
  const storedLogin = localStorage.getItem("token");
  console.log(storedLogin)
  const loginData = storedLogin ? storedLogin : null;
console.log(loginData)

  if (!loginData) return <Navigate to="/dashboard/admin" />;

  return <Outlet />;
}

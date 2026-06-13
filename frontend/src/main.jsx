import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorProfile from "./components/doctor/DoctorProfile.jsx";
// import AllDoctor from "./components/doctor/AllDoctor.jsx";
// import RegisterPage from "./pages/register.jsx";
// import LoginForm from "./pages/register.jsx";
import UserDashboard from "./components/user/UserDashboard.jsx";
import Login from "./components/pages/Login.jsx";
import Signup from "./components/pages/Signup.jsx";
import UserList from "./components/pages/userList.jsx";
import { ProtectedRoute } from "./middleware/authGuard.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import AddDoctor from "./components/admin/AddDoctor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/doctor/:id" element={<DoctorProfile />} /> */}
        {/* <Route path="/all-doctors" element={<AllDoctor/>} /> */}
        {/* <Route path="/register" element={<LoginForm/>}/> */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard/users" element={<UserList />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/add-doctor" element={<AddDoctor />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

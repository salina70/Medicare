import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import { Store } from "./redux/store.js";

import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorProfile from "./components/doctor/DoctorProfile.jsx";

// import LoginForm from "./pages/register.jsx";
import Login from "./components/pages/Login.jsx";
import Signup from "./components/pages/Signup.jsx";
import { CheckAdmin, ProtectedRoute } from "./middleware/authGuard.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import AddDoctor from "./components/admin/AddDoctor.jsx";
import Patients from "./components/admin/Patients.jsx";
import { PatientDashboard } from "./components/patient/PatientDashboard.jsx";
import { store } from "./redux/store.js";
import AllDoctor from "./components/doctor/AllDoctor.jsx";
import GetData from "./components/pages/GetData.jsx";
import Appointments from "./components/admin/Appointments.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/get" element={<GetData />} />
          {/* <Route path="/doctor/:id" element={<DoctorProfile />} /> */}
          {/* <Route path="/all-doctors" element={<AllDoctor/>} /> */}
          {/* <Route path="/register" element={<LoginForm/>}/> */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/patients" element={<Patients />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<CheckAdmin />}>
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
              <Route path="/dashboard/add-doctor" element={<AddDoctor />} />
            </Route>
            <Route path="/dashboard/users" element={<PatientDashboard />} />
            <Route path="/all-doctors" element={<AllDoctor />} />
            <Route path="/dashboard/appointments" element={<Appointments/>} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PopupProvider } from "./context/popupContext.jsx"; 
// import { Store } from "./redux/store.js";

import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorProfile from "./components/doctor/DoctorProfile.jsx";

// import LoginForm from "./pages/register.jsx";
import Login from "./components/pages/Login.jsx";
import Signup from "./components/pages/Signup.jsx";
import { CheckAdmin } from "./middleware/authGuard.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import AddDoctor from "./components/admin/AddDoctor.jsx";
import Patients from "./components/admin/Patients.jsx";
import { PatientDashboard } from "./components/patient/PatientDashboard.jsx";
import { store } from "./redux/store.js";
import AllDoctor from "./components/doctor/AllDoctor.jsx";
import GetData from "./components/pages/GetData.jsx";
import AdminLayout from "./components/admin/AdminLayout.jsx";
import AdminDoctors from "./components/admin/AdminDoctors.jsx";
import Appointments from "./components/admin/Appointments.jsx";
import DoctorDashboard from "./components/doctor/DoctorDashboard.jsx";
import DoctorLayout from "./components/doctor/DoctorLayout.jsx";
import DocAppointments from "./components/doctor/DocAppointments.jsx";
import AllDepartment from "./components/pages/AllDepartment.jsx";
// import ErrorBoundary from "./components/errorBoundary/errorBoundary.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ErrorBoundary> */}
      <BrowserRouter>
        <Provider store={store}>
          <PopupProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/get" element={<GetData />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            {/* <Route path="/all-doctors" element={<AllDoctor/>} /> */}
            {/* <Route path="/register" element={<LoginForm/>}/> */}

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/patients" element={<Patients />} />
            <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/departments" element={<AllDepartment/>} />

            <Route element={<CheckAdmin />}>
              <Route path="/dashboard" element={<AdminLayout />}>
                <Route path="patients" element={<Patients />} />
                <Route path="admin" element={<AdminDashboard />} />
                <Route path="doctors" element={<AdminDoctors />} />
                <Route path="add-doctor" element={<AddDoctor />} />
                <Route path="patients" element={<Patients />} />
                <Route path="appointments" element={<Appointments />} />
              </Route>
              <Route path="/dashboard/users" element={<PatientDashboard />} />
              <Route path="/all-doctors" element={<AllDoctor />} />
              <Route path="/dashboard" element={<DoctorLayout />}>
                <Route path="doctor" element={<DoctorDashboard />} />
                <Route path="earnings" />
                <Route path="view-appointments" element={<DocAppointments />} />
                <Route path="patient-history" />
                <Route path="profile" />
              </Route>
            </Route>
          </Routes>
          </PopupProvider>
        </Provider>
      </BrowserRouter>
    {/* </ErrorBoundary> */}
  </StrictMode>,
);

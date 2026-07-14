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
import Login from "./pages/auth/login.jsx";
import Signup from "./components/pages/Signup.jsx";
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
import SymptomDetail from "./components/pages/SymptomDetail.jsx";
import PaymentSuccess from "./components/pages/PaymentSuccess.jsx";
import PaymentFailure from "./components/pages/PaymentFailure.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import AddSymptom from "./components/admin/AddSymptom.jsx";
import AddDepartment from "./components/admin/AddDepartment.jsx";
import PatientLayout from "./components/patient/PatientLayout.jsx";
import { ProtectedRoute } from "./middleware/ProtectedRoute.jsx";
// import ErrorBoundary from "./components/errorBoundary/errorBoundary.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ErrorBoundary> */}
    <BrowserRouter>
      <Provider store={store}>
        <PopupProvider>
          <AuthProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/doctor/:id" element={<DoctorProfile />} />
              <Route path="/all-doctors" element={<AllDoctor />} />
              <Route path="/department" element={<AllDepartment />} />
              <Route path="/symptom" element={<SymptomDetail />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/payment-failure" element={<PaymentFailure />} />
              <Route path="/get" element={<GetData />} />

              {/* ================= ADMIN ================= */}
              <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                <Route path="/dashboard" element={<AdminLayout />}>
                  <Route path="admin" element={<AdminDashboard />} />
                  <Route path="patients" element={<Patients />} />
                  <Route path="doctors" element={<AdminDoctors />} />
                  <Route path="add-doctor" element={<AddDoctor />} />
                  <Route path="appointments" element={<Appointments />} />
                  <Route path="symptoms" element={<AddSymptom />} />
                  <Route path="departments" element={<AddDepartment />} />
                </Route>
              </Route>

              {/* ================= DOCTOR ================= */}
              <Route element={<ProtectedRoute allowedRoles={["doctor"]} />}>
                <Route path="/dashboard" element={<DoctorLayout />}>
                  <Route path="doctor" element={<DoctorDashboard />} />
                  <Route path="earnings" element={<div>Earnings</div>} />
                  <Route
                    path="view-appointments"
                    element={<DocAppointments />}
                  />
                  <Route
                    path="patient-history"
                    element={<div>Patient History</div>}
                  />
                  <Route path="profile" element={<div>Profile</div>} />
                </Route>
              </Route>

              {/* ================= PATIENT ================= */}
              <Route element={<ProtectedRoute allowedRoles={["patient"]} />}>
                <Route path="/dashboard" element={<PatientLayout />}>
                  <Route path="users" element={<PatientDashboard />} />
                  <Route path="symptom" element={<SymptomDetail />} />
                </Route>
              </Route>
            </Routes>
          </AuthProvider>
        </PopupProvider>
      </Provider>
    </BrowserRouter>
    {/* </ErrorBoundary> */}
  </StrictMode>,
);

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
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import AddDoctor from "./components/admin/AddDoctor.jsx";
import Patients from "./components/admin/AddPatient.jsx";
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
import AuthLayout from "./components/layout/auth.jsx";
import SimpleLayout from "./components/layout/simpleLayout.jsx";
import DashboardLayout from "./components/layout/DashboardLayout.jsx";
import PatientHome from "./pages/dashboard/PatientHome.jsx";
import FindDoctors from "./pages/dashboard/FindDoctor.jsx";
import DepartmentDoctor from "./components/pageComponents/home/DepartmentDoctor.jsx";
import ConsultForm from "./components/pageComponents/home/consultForm.jsx";
import Form from "./components/pageComponents/home/ConsForm.jsx";
// import ErrorBoundary from "./components/errorBoundary/errorBoundary.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ErrorBoundary> */}
    <BrowserRouter>
      <Provider store={store}>
        <PopupProvider>
          <AuthProvider>
            <Routes>
              <Route element={<SimpleLayout />}>
                {/* Public */}
                <Route path="/" element={<App />} />

                {/* Auth */}
                <Route element={<AuthLayout />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  {/* <Route path="/form" element={<Form />} /> */}
                </Route>

                {/* Patient*/}
                <Route element={<ProtectedRoute allowedRoles={["patient"]} />}>
                  <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route path="users" element={<PatientHome />} />
                    <Route path="find-doctors" element={<FindDoctors />} />
                    <Route path="symptom" element={<SymptomDetail />} />
                  </Route>
                </Route>
              </Route>

              {/* Public Routes */}
              <Route path="/doctor/:id" element={<DoctorProfile />} />
              <Route path="/all-doctors" element={<AllDoctor />} />
              <Route path="/department" element={<AllDepartment />} />
              <Route path="/departments/:id" element={<DepartmentDoctor />} />
              <Route path="/symptom" element={<SymptomDetail />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/payment-failure" element={<PaymentFailure />} />
              <Route path="/get" element={<GetData />} />

              {/* ================= ADMIN ================= */}
              <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                <Route path="/dashboard" element={<AdminLayout />}>
                  <Route path="add-dashboard" element={<AddDepartment />} />
                  <Route path="admin" element={<AdminDashboard />} />
                  <Route path="patients" element={<Patients />} />
                  <Route path="doctors" element={<AdminDoctors />} />
                  <Route path="add-doctor" element={<AddDoctor />} />
                  <Route path="appointments" element={<Appointments />} />
                  <Route path="symptoms" element={<AddSymptom />} />
                  {/* <Route path="departments" element={<AddDepartment />} /> */}
                  <Route path="add-department" element={<AddDepartment />} />
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
            </Routes>
          </AuthProvider>
        </PopupProvider>
      </Provider>
    </BrowserRouter>
    {/* </ErrorBoundary> */}
  </StrictMode>,
);

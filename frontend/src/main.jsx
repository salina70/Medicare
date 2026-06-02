import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorProfile from "./components/doctor/DoctorProfile.jsx";
import AllDoctor from "./components/doctor/AllDoctor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/all-doctors" element={<AllDoctor/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

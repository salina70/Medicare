import React from "react";
import Heropage from "./components/pages/Heropage";
import Doctor from "./components/doctor/Doctor";
import DoctorProfile from "./components/doctor/DoctorProfile";
import AppHeader from "./components/common/AppHeader";
import AppFooter from "./components/common/AppFooter";
import HowItWorks from "./components/pages/Howitworks";
import Symptom from "./components/pages/Symptom";
import Department from "./components/pages/Department";


function App() {
  return (
    <>

      <AppHeader />
      <Symptom />
      <Heropage />
      <Doctor />
      <Department />
      <HowItWorks />
      <AppFooter />
    </>
  );
}

export default App;

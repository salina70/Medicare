import React, { useRef } from "react";
import Heropage from "./components/pages/Heropage";
import Department from "./components/pages/Department";
import AppHeader from "./components/common/AppHeader";
import Symptom from "./components/pages/Symptom";
import Doctor from "./components/doctor/Doctor";
import AppFooter from "./components/common/AppFooter";
import HowItWorks from "./components/pages/Howitworks";

function App() {
  const departmentRef = useRef(null);

  return (
    <>
      <AppHeader />
      <Symptom />
      <Heropage departmentRef={departmentRef} />
      <Doctor />

      <div ref={departmentRef}>
        <Department />
      </div>

      <HowItWorks />
      <AppFooter />
    </>
  );
}

export default App;

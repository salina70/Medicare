import { useRef } from "react";
import Heropage from "../../components/pageComponents/home/Heropage";
import Department from "../../components/pageComponents/home/Department";
import AppHeader from "../../components/common/AppHeader";
import Symptom from "../../components/pageComponents/home/Symptom";
import Doctor from "../../components/doctor/Doctor";
import HowItWorks from "../../components/pageComponents/home/HowItWorks";
import AppFooter from "../../components/common/AppFooter";

function Home() {
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

export default Home;

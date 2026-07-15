import { useRef } from "react";
import Heropage from "../../components/pageComponents/home/Heropage";
import Department from "../../components/pageComponents/home/Department";
import Symptom from "../../components/pageComponents/home/Symptom";
import Doctor from "../../components/doctor/Doctor";
import HowItWorks from "../../components/pageComponents/home/HowItWorks";
import Footer from "../../components/layout/footer";

function Home() {
  const departmentRef = useRef(null);

  return (
    <>
      <Symptom />
      <Heropage departmentRef={departmentRef} />
      <Doctor />
      <div ref={departmentRef}>
        <Department />
      </div>
      <HowItWorks />
      <Footer />
    </>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import api from "../../utils/apiService";
import axios from "axios";
import {
  HeartPulse,
  UserRound,
  Brain,
  Baby,
  PersonStanding,
  Ear,
} from "lucide-react";

function Department() {
  const [spec, setSpec] = useState([]);
  useEffect(() => {
    const deptLogic = async () => {
      const data = await axios.get(`${api}/getdoctor`);
      setSpec(data.data.data);
    };
    deptLogic();
  }, []);
  const specialistNames = [
    ...new Set(spec.map((item) => item.specialization).filter(Boolean)),
  ];
  console.log(specialistNames);

  const specializationIcons = {
    Cardiologist: HeartPulse,
    Dermatologist: UserRound,
    Neurologist: Brain,
    Pediatrician: Baby,
    Gynecologist: PersonStanding,
    "ENT Specialist": Ear,
  };

  return (
    <section className="bg-gradient-to-b from-emerald-400 to-teal-200 min-h-[32rem] px-18 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">Find by Speciality</h2>

        <p className="text-white/80 mt-2">
          Find the right doctor for your healthcare needs
        </p>
      </div>

      {/* Department Cards */}

      <div className="flex flex-wrap justify-center gap-8">
        {specialistNames.slice(0, 6).map((item, idx) => {
          const Icon = specializationIcons[item]
         return <div
            key={idx}
            className="w-72 flex-col h-32 rounded-xl hover:scale-102 hover:cursor-pointer bg-emerald-300 flex justify-center items-center font-semibold border border-emerald-700 text-xl"
          >
            <div className="flex">{Icon && <Icon/>}</div>
           <div> {item}</div>
          </div>
})}
      </div>
    </section>
  );
}

export default Department;

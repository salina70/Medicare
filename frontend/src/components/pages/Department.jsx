import React, { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast"

function Department() {
  const departments = [
    { name: "Cardiology", icon: "fa-solid fa-heart-pulse" },
    { name: "Neurology", icon: "fa-solid fa-brain" },
    { name: "Dermatology", icon: "fa-solid fa-hand-dots" },
    { name: "Orthopedics", icon: "fa-solid fa-bone" },
    { name: "Pediatrics", icon: "fa-solid fa-baby" },

    { name: "Gynecology", icon: "fa-solid fa-venus" },
    { name: "ENT", icon: "fa-solid fa-ear-listen" },
    { name: "Dentistry", icon: "fa-solid fa-tooth" },
    { name: "Ophthalmology", icon: "fa-solid fa-eye" },
    { name: "Psychiatry", icon: "fa-solid fa-brain" },

    { name: "General Medicine", icon: "fa-solid fa-user-doctor" },
    { name: "Pulmonology", icon: "fa-solid fa-lungs" },
    { name: "Gastroenterology", icon: "fa-solid fa-user-injured" },
    { name: "Urology", icon: "fa-solid fa-droplet" },
    { name: "Radiology", icon: "fa-solid fa-x-ray" },
  ];
  const specificDoctor =  async () => {
try{
      const res = await axios.get(`http://localhost:8000/department/${name}`);
      console.log(res.data)
}catch(error){
toast.error(error.response?.data?.message || "something went wrong")
}
  }
  return (
    <>
      <div  className="mb-18 mt-10 mx-4">
        <h2 className="dept-h2 text-center text-3xl font-semibold">Our Departments</h2>
        <p className="dept-para text-center text-gray-400">
          Browse doctors according to the department and get an appointment
        </p>

        <div className="dept-div flex flex-wrap gap-8 mt-13 justify-center">
          {departments.map((dept, ind) => {
            return (
              <div
              onClick={specificDoctor}
                className="department border gap-4 pointer border-green-400 rounded-xl flex flex-col w-40 h-auto p-4 justify-center items-center"
                key={ind}
              >
                <i className={`${dept.icon} text-green-600 dept-icon`}> </i>
                <p className="dept-name">{dept.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Department;

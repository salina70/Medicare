import React, { useState, useEffect} from "react";
import DoctorLayout from "./DoctorLayout";
import axios from "axios";



function DoctorDashboard() {
  const [totalAppointments, settotalAppointments] = useState(0)
  const dashboardItems = [
    { name: "Appointments", color: "red", total:totalAppointments},
    { name: "Earnings", color: "blue" },
    { name: "Patient's History", color: "green" },
    { name: "My Profile", color: "yellow" },
  ];

  const colormap = {
    red: "bg-red-600",
    blue: "bg-blue-600",
    green: "bg-green-600",
    yellow: "bg-yellow-600",
  };

useEffect(() => {
  const fetchTotalApp = async (_, __, next) => {
    try{
      const res = await axios.get("http://localhost:8000/api/appointment/get");
      console.log(res)
      settotalAppointments(res.data.totalAppointments)
    }catch(error){
    next(error)
    }
  };
  fetchTotalApp();

 
}, [])
console.log(totalAppointments)

  return (
    <>
      <div className="flex">
        <div className="w-54">
          <DoctorLayout />
        </div>

        {/* right side */}
        <div className="ml-2 mt-4">
          <div className="mb-4">
            <h1 className="text-2xl ml-4 mb-8">Doctor Dashboard</h1>
          </div>
          <div className="flex flex-wrap m-2 gap-4 justify-center ">
            {dashboardItems.map((item, idx) => {
              return (
                <div className={`rounded-xl ${colormap[item.color] || "bg-gray-600" } p-3 w-48 h-35`} key={idx}>
                  <h1 className=" text-xl font-semibold">{item.name}</h1>
                  <p className="text-2xl mt-4">{item.total}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorDashboard;

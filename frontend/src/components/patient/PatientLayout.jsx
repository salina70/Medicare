import React, { useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";


function PatientLayout() {
    const nav = useNavigate()
      const [select, setselect] = useState("Dashboard");

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard/users" },
    { name: "Appointments", path: "/dashboard/view-appointments" },
    {name:"Profile", path:"/dashboard/profile"},
    { name: "Settings", path: "/dashboard/settings" },
    { name: "Logout", path: "/logout" },
  ];
  return (
  <>
  <div className='flex'>
     {/* left side */}
        <div className=" w-54 top-0 left-0">
          <h1 className="pl-4 pt-4 mb-6 font-bold text-green-600 text-xl">
            Medicare
          </h1>
          <div className="ml-2 flex flex-col gap-2">
            {menuItems.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    setselect(item.name)
                    nav(item.path)
                  }}
                  className={`px-4 py-2 rounded-xl transition cursor-pointer ${select === item.name ? "bg-green-500 text-black" : "hover:bg-gray-600"}`}
                  key={idx}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div>
            <Outlet />
        </div>
        </div>
  </>
  )
}

export default PatientLayout
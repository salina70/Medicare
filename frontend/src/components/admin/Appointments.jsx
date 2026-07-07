import React from 'react'
import { NavLink , Outlet} from 'react-router-dom';

function Appointments() {

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard/admin" },
    { name: "Doctors", path: "/dashboard/doctors" },
    // { name: "Add Doctor", path: "/dashboard/add-doctor" },
    { name: "Patients", path: "/dashboard/patients" },
    { name: "Appointments", path: "/dashboard/appointments" },
    {name:"Symptoms", path:"/dashboard/symptoms"},
    {name:"Departments", path:"/dashboard/departments"}

  ];
  return (
  <>
<div className='bg-gray-900 h-160 p-4 text-white'>

</div>
  </>
  )
}

export default Appointments
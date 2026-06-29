import React from 'react'
import DoctorLayout from './DoctorLayout'

function DocAppointments() {
  return (
   <>
   <div className='flex min-h-screen'>
<div className='bg-red-500'> <DoctorLayout/></div>
   
    <div className='flex-1 p-4'>
        <h1 className='text-white bg-red-600'>right side</h1>
    </div>
   </div>
   </>
  )
}

export default DocAppointments
import React from 'react'
import Link, { Outlet } from "react-router-dom"

function AdminLayout() {
  return (
    <div>
      <nav className='flex jsutify-between px-6 py-1'>
        <Link to="/">Medicare</Link>
        <button>Logout</button>       

      </nav>
      <div>
            <aside className='flex flex-col gap-2'>
        <Link to='/admin/dashboard'>Dashboard</Link>
                <Link to='/admin/appointment'>Appointments</Link>
        <Link to='/admin/doctor'>Doctors</Link>
        <Link to='/admin/department'>Departments</Link>
        <Link to='/admin/rating'>Rating</Link>
      </aside>
      <main>
        <Outlet/>
      </main>
      </div>

    </div>
  )
}

export default AdminLayout
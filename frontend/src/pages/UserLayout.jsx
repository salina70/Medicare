import React from "react";
import { Link, Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Medicare</Link>
        <button>Logout</button>
      </nav>
      <div>
        <aside>
          <Link to="/user/dashboard">Dashboard</Link>
          <Link tp="/appointment">My Appointments</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/favourites">Favourites</Link>
        </aside>
      </div>
      <Outlet/>
    </div>
  );
}

export default UserLayout;

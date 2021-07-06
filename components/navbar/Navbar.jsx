import Link from "next/link";
import React from "react";

import Sidebar from './Sidebar.jsx'


const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="wrapper">
        <div className="paper-box">
          <div>Today's Paper</div>
          <div>Wednesday, April 7 , 2021</div>
        </div>
       <Link href="/" passHref>
       <div className="logo-box">
          <div className="logo"></div>
          <h1>The Northeast India Times</h1>
        </div>
       </Link>
        <div className="activity-box">
          <div>Assam Edition</div>
          <Sidebar/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
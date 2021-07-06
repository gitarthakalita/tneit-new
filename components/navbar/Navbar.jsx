import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="wrapper">
        <div className="paper-box">
          <div>Today's Paper</div>
          <div>Wednesday, April 7 , 2021</div>
        </div>
        <div className="logo-box">
          <div className="logo"></div>
          <h1>The Northeast India Times</h1>
        </div>
        <div className="activity-box">
          <div>Assam Edition</div>
          <div>menu</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

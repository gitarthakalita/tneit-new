import { Button } from "@material-ui/core";
import Link from "next/link";
import React from "react";

import Sidebar from './Sidebar.jsx'






const Navbar = () => {

  

  
  let today = new Date();

  const month = today.toLocaleString('default', {month: 'long'});
  const weekday = today.toLocaleString('default', {weekday: 'long'});
  const day = today.toLocaleString('default', {day: 'numeric'});
  const year = today.toLocaleString('default', {year: 'numeric'});
  
  let sentDate = today.toLocaleString('default', { weekday:'long', month: 'long', day:'numeric',year: 'numeric' });


  return (
    <nav className="navbar-container">
      <div className="wrapper">
        <div className="paper-box">
          <div className="paper">Today's Paper, Assam Edition</div>
          {/* <div>Wednesday, April 7 , 2021</div> */}
          <div>{sentDate}</div>
        </div>
       <Link href="/" passHref>
       <div className="logo-box">
          <div className="logo"></div>
          <h1>The Northeast India Times</h1>
        </div>
       </Link>
        <div className="activity-box">

          
          <div className="subscribe">
            <Button>Subscribe</Button>
          </div>
          <Sidebar/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



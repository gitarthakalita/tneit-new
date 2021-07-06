import React from "react";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import Link from "next/link";



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="menu-bar">
        <IconButton onClick={showSidebar}>
          <MenuIcon />
        </IconButton>
      </div>

      {
        <div className={sidebar ? "sidebar active" : "sidebar"}>
          
          <div  className="close">
          <IconButton onClick={showSidebar}>
            <CloseIcon />
          </IconButton>
          </div>
          <div className="sidebar-menu">
            {/* <div className="link-item"> Store </div> */}
            <Link href="/contribute" passHref>
            <div className="link-item"> Contribute </div>
            </Link>
            
            <div className="link-item"> Contact </div>
            <div className="link-item"> Our Team </div>
            <Link href="/faq" passHref>
            <div className="link-item"> FAQ </div>
            </Link>
            
            <div className="link-item"> Privacy </div>
            <div className="link-item"> Sitemap </div>
            <div className="link-item"> Terms </div>
            {/* <div className="link-item">  </div> */}
          </div>
        </div>
      }
    </>
  );
};

export default Sidebar;

import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';
import Sidebar from './Sidebar';



const MobileNavbar = () => {
  return (
    <div className='mobile-navbar-container'>
      <div className="wrapper">

        <Link href="/">
          <div className='menu-item'>
            <HomeIcon />
            <span>Today</span>
          </div>
        </Link>


        <Link href="/sections">
          <div className='menu-item'>
            <ViewModuleIcon />
            <span>Sections</span>
          </div>

        </Link>

        <Link href="/menu">
          <div className='menu-item'>
            <MenuIcon />
            <span>Menu</span>
          </div>
        </Link>

      

      </div>
    </div>
  )
}

export default MobileNavbar



import React from 'react'
import CategoryBar from '../navbar/CategoryBar'
import CategoryNavbar from '../navbar/CategoryNavbar'
import Navbar from '../navbar/Navbar'




const Layout = ({children}) => {
    return (
        <div className="layout-container">
            <Navbar/>
            <CategoryBar/>
            <CategoryNavbar/>
            {children}
        </div>
    )
}

export default Layout

import React from 'react'
import CategoryBar from '../navbar/CategoryBar'
import Navbar from '../navbar/Navbar'




const Layout = ({children}) => {
    return (
        <div className="layout-container">
            <Navbar/>
            <CategoryBar/>
            {children}
        </div>
    )
}

export default Layout

import React from 'react'
import FeaturedMain from '../components/featured/FeaturedMain'
import Layout from '../components/layout/Layout'



const Homepage = () => {
  return (
    <Layout 
    // showAds= "false"
    >
      <section className="featured-section">
               <div className="wrapper">
                 <div className="featured-live-updates"></div>
                 <div className="featured-main">
                   <FeaturedMain/>
                 </div>
                 <div className="featured-exclussive">
                   <div className="exclussive-item"></div>
                   <div className="exclussive-item"></div>
                   <div className="exclussive-item"></div>
                 </div>
                 <div className="featured-opinion"></div>
               </div>
      </section>
      
     
    </Layout>
  )
}

export default Homepage

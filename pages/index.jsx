import React from 'react'
import FeaturedMain from '../components/featured/FeaturedMain'
import Layout from '../components/layout/Layout'



const Homepage = ({data}) => {

  console.log(data);
   

  return (
    <Layout 
    showAds= "true"
    >
      <section className="featured-section">
               <div className="wrapper">
                 <div className="featured-live-updates"></div>
                 <div className="featured-main">
                   <FeaturedMain
                      item={data.featuredMain}
                   />
                 </div>
                 <div className="featured-exclussive">
                   <div className="exclussive-item"></div>
                   <div className="exclussive-item"></div>
                   <div className="exclussive-item"></div>
                 </div>
                 <div className="featured-opinion"></div>
               </div>
      </section>

      <section className="story-section">
        <div className="wrapper">
          
        </div>
      </section>
      
     
    </Layout>
  )
}

export default Homepage;

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/data/featured.json")
  const data = await res.json()

  return{
    props:{
      data
    },
  }
}

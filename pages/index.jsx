import React from "react";
import Adbox from "../components/adbox/Adbox";
import EditorialToday from "../components/editors/EditorialToday";
import EditorsPick from "../components/editors/EditorsPick";
import FeaturedExclussive from "../components/featured/FeaturedExclussive";
import FeaturedMain from "../components/featured/FeaturedMain";
import LiveUpdate from "../components/featured/LiveUpdate";
import Layout from "../components/layout/Layout";

const Homepage = ({ data }) => {
  console.log(data.liveUpdate);

  return (
    <Layout showAds="true">
      <section className="featured-section">
        <div className="wrapper">
          <div className="featured-live-updates">
            <LiveUpdate livedata={data.liveUpdate} />
          </div>
          <div className="featured-main">
            <FeaturedMain item={data.featuredMain} />
          </div>
          <div className="featured-exclussive">
            {data.featuredExclussive.map((item, index) => (
              <FeaturedExclussive data={item} key={index} />
            ))}
          </div>
          <div className="featured-opinion"></div>
        </div>
      </section>

      <section className="editors-section">
        <div className="wrapper">
          <EditorsPick/>
          <EditorialToday/>
        </div>
      </section>

      
      <Adbox image_url="/assets/advert.png" height="30vh" />

      <section className="editors-section">
        <div className="wrapper"></div>
      </section>


      <section className="editors-section">
        <div className="wrapper"></div>
      </section>



      <section className="editors-section">
        <div className="wrapper"></div>
      </section>

      <Adbox image_url="https://picsum.photos/1250/350" height="40vh" />


<section className="editors-section">
  <div className="wrapper"></div>
</section>

<section className="editors-section">
  <div className="wrapper"></div>
</section>

<section className="editors-section">
  <div className="wrapper"></div>
</section>


      <Adbox image_url="/assets/advert.png" height="40vh" />

    </Layout>
  );
};

export default Homepage;

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/data/homepage.json");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

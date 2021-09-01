import React from "react";

import Layout from "../../components/layout/Layout";

const NewsPost = () => {
  return (
    <Layout showAds="true">
      <section className="story-header-section">
        <div className="story-header-wrapper">
          <div className="story-type">Featured</div>
          <h3>
            Pfizer Nears Deal With Trump Administration to Provide More Vaccine
            Doses
          </h3>
          <p className="subheading">
          The company could provide at least tens of millions of additional doses of a coronavirus vaccine under an agreement that would give it better access to the supplies it needs to expand manufacturing.
          </p>
          <div className="story-data-box">
            <div className="story-author">By Sharon LaFraniere and Katie Thomas</div>
            <span>|</span>
            <div className="story-date">20.09.2021</div>
          </div>

          <div className="story-header-image">
              <div className="image-caption">
              A health worker receiving the Pfizer vaccine in Arlington, Va., this month. The Trump administration and Pfizer announced a deal to provide an additional 100 million doses next year.Credit...Michael A. McCoy for The New York Times
              </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPost;

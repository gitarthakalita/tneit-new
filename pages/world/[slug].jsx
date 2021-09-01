import React from "react";

import Layout from "../../components/layout/Layout";

const NewsPost = () => {
  return (
    <Layout showAds="true">
      <section className="story-header-section">
        <div className="story-header-wrapper">
          <div className="story-type">
            Featured <span>|</span> World{" "}
          </div>
          <h3>
            Pfizer Nears Deal With Trump Administration to Provide More Vaccine
            Doses
          </h3>
          <p className="subheading">
            The company could provide at least tens of millions of additional
            doses of a coronavirus vaccine under an agreement that would give it
            better access to the supplies it needs to expand manufacturing.
          </p>
          <div className="story-data-box">
            <div className="story-author">
              By Sharon LaFraniere and Katie Thomas
            </div>
            <span>|</span>
            <div className="story-date">20.09.2021</div>
          </div>

          <div className="story-header-image-box">
            <div className="image"></div>
            <div className="image-caption">
              A health worker receiving the Pfizer vaccine in Arlington, Va.,
              this month. The Trump administration and Pfizer announced a deal
              to provide an additional 100 million doses next
              year.Credit...Michael A. McCoy for The New York Times
            </div>
          </div>
        </div>
      </section>

      <div className="story-content-section">
        <div className="story-content-wrapper">
          <p>
            The Trump administration and Pfizer are close to a deal under which
            the pharmaceutical company would bolster supply of its coronavirus
            vaccine for the United States by at least tens of millions of doses
            next year in exchange for a government directive giving it better
            access to manufacturing supplies, people familiar with the
            discussions said.
          </p>

          <p>
            An agreement, which could be announced as early as Wednesday, would
            help the United States at least partly offset a looming vaccine
            shortage that could leave as many as 110 million adult Americans
            uncovered in the first half of 2021.
          </p>

          <p>
            So far, only two pharmaceutical companies — Pfizer and Moderna —
            have won federal authorization for emergency distribution of
            Covid-19 vaccines, and most of what they are capable of producing
            for the next six months has already been allocated through contracts
            with the United States and other governments.
          </p>

          <p>
            In the negotiations, the government is asking for 100 million
            additional doses from Pfizer from April through June. The company
            has signaled that it should be able to produce at least 70 million,
            and perhaps more, if it can get more access to supplies and raw
            materials.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPost;

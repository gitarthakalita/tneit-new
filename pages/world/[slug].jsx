import React from "react";
import Adbox from "../../components/adbox/Adbox";

import Layout from "../../components/layout/Layout";

const NewsPost = () => {
  return (
    <Layout showAds="true">
      <section className="story-header-section">
        <div className="story-header-wrapper">
          <div className="story-type">
            Featured <span>|</span> World
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

          <Adbox image_url="https://picsum.photos/700/500" height="30vh" />

          <p>
            To help Pfizer, the deal calls for the government to invoke the
            Defense Production Act to give the company better access to roughly
            nine specialized products it needs to make the vaccine. One person
            familiar with the list said it included lipids, the oily molecules
            in which the genetic material that is used in both the Moderna and
            Pfizer vaccines is encased.
          </p>

          <p>
            Pfizer first started asking for the government’s help in obtaining
            supplies as early as September and has been unhappy about the lack
            of response, according to documents reviewed by The New York Times.
          </p>

          <p>
            Moderna and other companies that worked more closely than Pfizer
            with the administration through its Operation Warp Speed to develop
            their vaccines already receive favored treatment from suppliers,
            putting Pfizer at a disadvantage. That includes two companies —
            Sanofi and Novavax — that have yet to begin large-scale clinical
            trials in the United States.
          </p>

          <p>
            Pfizer and the administration have been negotiating for more doses
            from Pfizer for more than a month. But a host of other issues have
            stood in the way of a deal, including Pfizer’s commitments to other
            nations that moved faster than the United States to lock in a big
            supply, according to people familiar with the situation.
          </p>

          <p>
            Pfizer already has a federal contract, signed in July, to deliver
            100 million doses of its vaccine by the end of March. Moderna has
            the same agreement, and has also pledged to sell the government 100
            million more doses in the second quarter of the year, from the start
            of April to the end of June. Editors’ Picks The Shy Sisters Behind
            Austin’s Breakout Breakfast Tacos She’s the Investor Guru for Online
            Creators ‘Want to Join My Crossword Group Chat?’
          </p>

          <Adbox image_url="https://picsum.photos/600/800" height="60vh" />

          <p>
            Because the Pfizer and the Moderna vaccine both require two doses,
            that supply would cover only 150 million Americans out of the
            roughly 260 million who are eligible at the moment to be vaccinated.
            (Moderna’s vaccine is now restricted to those 18 and over, and
            Pfizer’s is limited to those 16 and over.)
          </p>

          <p>
            If Pfizer provides another 100 million doses, that would leave about
            60 million eligible Americans uncovered in the first half of the
            year. Other producers could also cover the shortfall should their
            vaccines prove successful.
          </p>
          <p>
            It is not clear how many more doses Pfizer can quickly produce even
            if the administration uses the Defense Production Act to clear away
            supply obstacles. One person familiar with the situation said the
            firm may only be able to deliver 70 million by the end of June, even
            with better access to supplies.
          </p>

          <p>
            Had the government agreed to prioritize its supply needs earlier,
            one person familiar with Pfizer’s situation said, the company might
            be better positioned now to fully meet the demands. Documents
            reviewed by The Times showed that Pfizer officials began asking Gen.
            Gustave F. Perna, the chief operating officer of Operation Warp
            Speed, in September for help with supplies and brought up the issue
            repeatedly in weekly meetings.
          </p>

          <p>
            A senior Trump administration official said the government was
            unwilling to intervene because Pfizer refused to promise that it
            would use those materials to produce vaccines solely for Americans.
          </p>

          <p>
            “It’s our obligation under that type of priority rating to make sure
            that assets are used only for U.S. sales or production,” the
            official said, “and they weren’t willing to do that.”
          </p>

          <p>
            People knowledgeable about the talks said General Perna had raised a
            different concern with Pfizer, saying the government wanted to
            protect its investment in the other companies under Warp Speed’s
            umbrella, so it did not want to grant Pfizer the same priority with
            supplies.
          </p>

          <Adbox image_url="https://picsum.photos/600/1200" height="78vh" />

          <p>This article is copied from The New York Times for UX/UI demonstration purposes.</p>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPost;

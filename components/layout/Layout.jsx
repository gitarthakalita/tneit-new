import React from "react";
import { useEffect } from "react";
import Adbox from "../adbox/Adbox";
import CategoryBar from "../navbar/CategoryBar";
import CategoryNavbar from "../navbar/CategoryNavbar";
import Navbar from "../navbar/Navbar";

const Layout = ({ children, showAds }) => {
  useEffect(() => {
    let addHeight;
    if (showAds === "true") {
      addHeight = 170 + 309.19;
    } else {
      addHeight = 170;
    }

    window.onscroll = scrollShow;

    function scrollShow() {
      if (
        document.body.scrollTop >
          window.innerHeight - (window.innerHeight - addHeight) ||
        document.documentElement.scrollTop >
          window.innerHeight - (window.innerHeight - addHeight)
      ) {
        document.getElementsByClassName("bingo")[0].style.position = "sticky";
        document.getElementsByClassName("bingo")[0].style.top = "0";
        document.getElementsByClassName("bingo")[0].style.visibility =
          "visible";

        document.getElementsByClassName("bingo")[0].style.display = "block";
        document.getElementsByClassName("bingo")[0].style.zIndex = "999";
      } else {
        document.getElementsByClassName("bingo")[0].style.top = "0";
        document.getElementsByClassName("bingo")[0].style.display = "none";
        document.getElementsByClassName("bingo")[0].style.visibility = "hidden";
      }
    }
  });

  return (
    <div className="layout-container">
      {showAds === "true" ? (
        <Adbox
          image_url="https://picsum.photos/1150/250"
          height="30vh"
        />
      ) : null}
      <Navbar />
      <CategoryBar />
      <hr />
      <div className="bingo">
        <CategoryNavbar />
      </div>
      {children}
    </div>
  );
};

export default Layout;

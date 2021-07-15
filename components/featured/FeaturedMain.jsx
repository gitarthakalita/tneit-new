import React from "react";
import Image from "next/image";

const FeaturedMain = ({ item }) => {
  return (
    <div className="featured-main-wrapper">
      <h3>{item.title}</h3>
      <div className="excerpt-box">
          {
              item.excerpts.map((item,index) => (
                  <p>{item}</p>
              ))
          }
      </div>
      <div
        className="image-box"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      ></div>
    </div>
  );
};

export default FeaturedMain;

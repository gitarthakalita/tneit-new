import React from "react";
import Link from "next/link";

const FeaturedMain = ({ item }) => {
  return (
    <div className="featured-main-wrapper">
      <Link href={`/${item.category}/${item.slug}`}>
        <h3>{item.title}</h3>
      </Link>
      <div className="excerpt-box">
        {item.excerpts.map((item, index) => (
          <p>{item}</p>
        ))}
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

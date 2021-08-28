import React from "react";

import Link from "next/link";

const CategoryBar = () => {
  return (
    <div className="category-bar">
      <Link href="/" >
        <div className="cat-item"> Home </div>
      </Link>
      <Link href="/world" >
        <div className="cat-item"> World </div>
      </Link>
      <Link href="/asia ">
        <div className="cat-item"> Asia </div>
      </Link>
      <Link href="/india">
        <div className="cat-item" > India </div>
      </Link>
      <Link href="/ne-india" >
        <div className="cat-item"> NE India </div>
      </Link>
      <Link href=" /editorial">
        <div className="cat-item"> Editorial </div>
      </Link>
      <Link href="/opinion ">
        <div className="cat-item"> Opinion </div>
      </Link>
      <Link href=" /exclussive">
        <div className="cat-item"> Exclussive </div>
      </Link>
      <Link href="/business ">
        <div className="cat-item"> Business </div>
      </Link>
      <Link href="/economy ">
        <div className="cat-item"> Economy </div>
      </Link>
      <Link href="/politics ">
        <div className="cat-item"> Politics </div>
      </Link>
      <Link href="/technology">
        <div className="cat-item"> Technology </div>
      </Link>
      <Link href="/arts ">
        <div className="cat-item"> Arts </div>
      </Link>
      <Link href="/lifestyle ">
        <div className="cat-item"> Lifestyle </div>
      </Link>
      <Link href="/podcast">
        <div className="cat-item"> Podcast </div>
      </Link>
      <Link href="/magazine">
        <div className="cat-item"> Magazine </div>
      </Link>
    </div>
  );
};

export default CategoryBar;

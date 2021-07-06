import React from "react";
import CategoryBar from "./CategoryBar";

const CategoryNavbar = () => {
  return (
    <div className="category-navbar">
      <div className="wrapper">
        <div className="logo"></div>
        <CategoryBar />
        <div className="activity-box">
          <div>menu</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;

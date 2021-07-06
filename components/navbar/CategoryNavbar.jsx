import React from "react";
import CategoryBar from "./CategoryBar";
import Sidebar from "./Sidebar";

const CategoryNavbar = () => {
  return (
    <div className="category-navbar">
      <div className="wrapper">
        <div className="logo"></div>
        <CategoryBar />
        <div className="activity-box">
          <Sidebar/>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;

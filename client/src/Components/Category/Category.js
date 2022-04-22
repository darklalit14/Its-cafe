import React from "react";
import "./Category.css";

function Category({ title, img }) {
  return (
    <div className="category">
      <img
        src={img}
        alt="category"
        className="categoryImg"
      />
      <div className="categoryOverlay"></div>
      <h3 className="categoryTitle">{title}</h3>
    </div>
  );
}

export default Category;

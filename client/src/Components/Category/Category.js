import React from "react";
import "./Category.css";

function Category() {
  return (
    <div className="category">
      <img
        src="https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt=""
        className="categoryImg"
      />
      <div className="categoryOverlay"></div>
      <h3 className="categoryTitle">Soup</h3>
    </div>
  );
}

export default Category;

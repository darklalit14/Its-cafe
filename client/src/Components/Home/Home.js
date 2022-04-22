import React from "react";
import Category from "../Category/Category";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__topSection">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80"
          alt=""
          className="bg_image"
        />
        <div className="overlay"></div>
        <h1 className="tagline">Good food changes the mood</h1>
      </div>

      <div className="spacing"></div>

      <div className="home_categories">
        <h1 className="title">Categories</h1>

        <div className="allCategories">
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </div>
  );
}

export default Home;

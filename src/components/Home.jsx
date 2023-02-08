import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h2>
          Just <u>garlic</u>.
        </h2>
        <p>The best garlic around here. Straight from my backyard. </p>
        <Link to="/shop">
          <button className="shop-now-btn button-59">SHOP NOW</button>
        </Link>
      </div>
      <div className="home-img"></div>
    </div>
  );
}

export default Home;

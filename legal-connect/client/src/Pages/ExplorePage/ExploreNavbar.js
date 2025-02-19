import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExploreNavbar.css";

const ExploreNavbar = ({ setSearchQuery }) => {
  const navigate = useNavigate();

  return (
    <nav className="explore-navbar">
      {/* Explore Navigation Buttons */}
      <div className="nav-links">
        <button className="nav-btn" onClick={() => navigate("/explore")}>Main Explore</button>
        <button className="nav-btn" onClick={() => navigate("/explore-news")}>Explore News</button>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default ExploreNavbar;

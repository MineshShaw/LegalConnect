import React from "react";
import "./ExploreNews.css";

const ExploreNewsNavbar = ({ setSearchQuery }) => {
  return (
    <nav className="explore-news-navbar">
      <h2 className="news-logo">LegalConnect News</h2>
      <input
        type="text"
        placeholder="Search news..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="news-search-input"
      />
    </nav>
  );
};

export default ExploreNewsNavbar;

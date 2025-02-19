import React, { useState } from "react";
import ExploreNavbar from "./ExploreNavbar"; // Import Explore Navbar
import "./explorePage.css";

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="explore-container">
      {/* Explore Navbar */}
      <ExploreNavbar setSearchQuery={setSearchQuery} />
      
      {/* Placeholder for Explore Content */}
      <h1>Explore Page</h1>
      <p>Content will be added here...</p>
    </div>
  );
};

export default ExplorePage;

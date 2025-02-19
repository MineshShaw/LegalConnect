import React, { useState } from "react";
import "./explorePage.css";

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [contentList, setContentList] = useState([
    { id: 1, title: "Latest Tax Law Updates", type: "article", description: "Stay informed on the newest tax reforms.", url: "#" },
    { id: 2, title: "Starting a CA Practice", type: "video", description: "Tips for setting up your CA business.", url: "https://www.youtube.com/" },
    { id: 3, title: "Corporate Law Essentials", type: "article", description: "Understanding corporate compliance in 2025.", url: "#" },
  ]);

  // Filter content based on search query
  const filteredContent = contentList.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="explore-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Explore Legal & Financial Insights</h1>
        <p>Discover the latest updates, articles, and videos from industry experts.</p>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search articles, videos, or topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Content Section */}
      <div className="content-section">
        {filteredContent.length > 0 ? (
          filteredContent.map((item) => (
            <div key={item.id} className="content-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.type === "video" ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">Watch Video</a>
              ) : (
                <a href={item.url}>Read More</a>
              )}
            </div>
          ))
        ) : (
          <p className="no-results">No results found.</p>
        )}
      </div>

      {/* Upload Section */}
      <div className="upload-section">
        <h2>Post Your Content</h2>
        <p>Service providers can share their expertise with articles and videos.</p>
        <button className="upload-btn">Post Article</button>
        <button className="upload-btn">Upload Video</button>
      </div>
    </div>
  );
};

export default ExplorePage;

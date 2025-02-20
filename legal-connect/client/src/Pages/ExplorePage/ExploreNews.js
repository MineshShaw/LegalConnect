import React, { useState, useEffect } from "react";
import ExploreNewsNavbar from "./ExploreNewsNavbar";
import ExploreNewsCard from "./ExploreNewsCard";
import { fetchFilteredNews } from "./ExploreNewsAPI"; 
import "./ExploreNews.css";

const ExploreNews = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchFilteredNews(searchQuery, currentPage).then(setNews);
  }, [searchQuery, currentPage]);

  return (
    <div className="explore-news-container">
    
      <ExploreNewsNavbar setSearchQuery={setSearchQuery} />

    
      <div className="news-list">
        {news.length > 0 ? (
          news.map((article, index) => <ExploreNewsCard key={index} article={article} />)
        ) : (
          <p className="no-results">No relevant news found.</p>
        )}
      </div>

 
      <div className="pagination-controls">
        <button
          className="pagination-button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <button className="pagination-button" onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ExploreNews;

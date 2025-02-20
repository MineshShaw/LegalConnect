import React from "react";
import "./ExploreNews.css";

const ExploreNewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <img src={article.urlToImage || "https://via.placeholder.com/400x200"} alt="News" />
      <div className="news-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <h6>{article.source.name} · {new Date(article.publishedAt).toLocaleDateString()}</h6>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ExploreNewsCard;

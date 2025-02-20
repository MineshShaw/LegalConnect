import React from "react";
import "./explorePage.css";

const ExplorePost = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.providerName}</h3>
      <p>{post.content}</p>
      <span className="timestamp">{new Date(post.timestamp).toLocaleString()}</span>
    </div>
  );
};

export default ExplorePost;

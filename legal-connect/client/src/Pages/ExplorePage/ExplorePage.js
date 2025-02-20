import React, { useState, useEffect } from "react";
import ExploreNavbar from "./ExploreNavbar";
import ExplorePost from "./ExplorePost";
import { fetchPosts } from "./ExploreAPI";
import "./explorePage.css";

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <div className="explore-container">
      {/* Explore Navbar with Search */}
      <ExploreNavbar setSearchQuery={setSearchQuery} />

      {/* Verified Service Provider Posts */}
      <div className="posts-container">
        <h2>Posts from Verified Service Providers</h2>
        {posts.length > 0 ? (
          posts.map((post, index) => <ExplorePost key={index} post={post} />)
        ) : (
          <p className="no-posts">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;

import React from "react";
import { Link } from "react-router-dom";
import blogData from "../assets/blogs.json";
import "../style/blog.css";

function Blog() {
  const latestBlogs = blogData.slice(0, 3); // Displaying the latest 3 blogs
console.log(latestBlogs)
  return (
    <div className="blog-container">
      <h1 className="blog-title">Latest Blogs</h1>
      {latestBlogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className="blog-details">
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-date">{blog.date}</p>
            <p className="blog-excerpt">{blog.excerpt}</p>
            <Link to={`/blog/${blog.id}`} className="blog-read-more">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;

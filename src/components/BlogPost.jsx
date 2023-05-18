import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogs.json";
import "../style/blog-post.css";

function BlogPost() {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  const { title, date, content } = blog;

  return (
    <div className="blog-post-container">
      <h1 className="blog-post-title">{title}</h1>
      <p className="blog-post-date">{date}</p>
      <div className="blog-post-content">{content}</div>
    </div>
  );
}

export default BlogPost;

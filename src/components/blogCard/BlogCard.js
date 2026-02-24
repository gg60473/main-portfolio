import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <div className="blog-container">
      {blog.url ? (
        <a
          className="blog-card"
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="blog-title">{blog.title}</h3>
          <p className="small">{blog.description}</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      ) : (
        <div className="blog-card no-link">
          <h3 className="blog-title">{blog.title}</h3>
          <p className="small">{blog.description}</p>
        </div>
      )}
    </div>
  );
}

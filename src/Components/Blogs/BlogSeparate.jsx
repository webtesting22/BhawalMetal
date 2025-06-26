import React from "react";
import BlogData from "./BlogData";
import { useParams, useNavigate } from "react-router-dom";
import "./Blog.css";

const BlogSeparate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = BlogData.find((b) => b.id === parseInt(id));
    if (!blog) return <div className="blog-not-found">Blog not found.</div>;
    return (
        <section>
            <div className="blog-separate-container">
            <button className="blog-back-btn" onClick={() => navigate(-1)}>&larr; Back to Blogs</button>
            <div className="blog-separate-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-separate-image" />
            </div>
            <div className="blog-separate-content">
                <span className="blog-separate-category">{blog.category}</span>
                <span className="blog-separate-date">{blog.date}</span>
                <h1 className="blog-separate-title">{blog.title}</h1>
                <p className="blog-separate-full-content">{blog.content}</p>
            </div>
        </div>
        </section>
    );
};

export default BlogSeparate;
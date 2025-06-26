import React, { useState } from 'react';
import BlogData from './BlogData';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import { Row, Col } from "antd"

const categories = [
    'UX Design',
    'Branding',
    'Web Development',
    'Design System',
    'Marketing',
];

const socialIcons = [
    { name: 'Instagram', icon: '📷', link: '#' },
    { name: 'Behance', icon: '🅱️', link: '#' },
    { name: 'LinkedIn', icon: '🔗', link: '#' },
    { name: 'Website', icon: '🌐', link: '#' },
];

const AOS_BLUR = {
    'data-aos': 'fade-up',
    'data-aos-duration': '900',
    'data-aos-easing': 'ease',
    'data-aos-once': 'true',
};

const Blog = () => {
    const navigate = useNavigate();
    const [selectedCategories, setSelectedCategories] = useState(['UX Design']);

    // For demo, all blogs are 'Brand Strategy', but you can map categories from BlogData
    const filteredBlogs = BlogData.filter(
        (blog) =>
            selectedCategories.length === 0 ||
            selectedCategories.includes(blog.category) ||
            (blog.category === 'Brand Strategy' && selectedCategories.includes('UX Design'))
    );

    const featuredBlog = BlogData[0];
    const otherBlogs = filteredBlogs.filter((b) => b.id !== featuredBlog.id);

    const handleCategoryChange = (cat) => {
        setSelectedCategories((prev) =>
            prev.includes(cat)
                ? prev.filter((c) => c !== cat)
                : [...prev, cat]
        );
    };

    return (

        <>
            <section style={{ background: "#fafbfc", overflow: "unset" }}>
                <div className='top-header-blog' data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                    <h1
                        className='main-title'
                        style={{ color: "black", textAlign: "center" }}
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="1200"
                    >
                        Insights & Innovations in Steel Industries
                    </h1>
                    <p className='main-tagline'>Empowering progress with the latest trends, technologies, and stories from the world of steel.</p>
                </div>
                <div className='blog-layout-image-wrapper' data-aos="blur-to-clear" data-aos-delay="250" data-aos-duration="1200">
                    <img src="https://images.unsplash.com/photo-1730584475652-d55a2021bae8?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="blog-layout">
                    {/* Sidebar */}
                    <aside className="blog-sidebar" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1200">
                        <div className="blog-sidebar-section">
                            <div className="blog-sidebar-title">Quick Filters :</div>
                            <div className="blog-categories-list">
                                {categories.map((cat) => (
                                    <label key={cat} className="blog-category-label">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(cat)}
                                            onChange={() => handleCategoryChange(cat)}
                                        />
                                        <span>{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="blog-sidebar-section">
                            <div className="blog-sidebar-title">Follow us on :</div>
                            <div className="blog-social-icons">
                                {socialIcons.map((icon) => (
                                    <a
                                        key={icon.name}
                                        href={icon.link}
                                        className="blog-social-icon"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={icon.name}
                                    >
                                        {icon.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="blog-main-content">
                        {/* Featured Blog */}
                        <section className="blog-featured" data-aos="fade-up" data-aos-delay="550" data-aos-duration="1200">
                            <div className="blog-featured-text">
                                <h1 className="blog-featured-title">{featuredBlog.title}</h1>
                                <p className="blog-featured-summary">{featuredBlog.excerpt}</p>

                                <button
                                    className="blog-featured-btn"
                                    onClick={() => navigate(`/blogs/${featuredBlog.id}`)}
                                >
                                    Read full blog
                                </button>
                            </div>
                            <div className="blog-featured-image-wrapper">
                                <img
                                    src={featuredBlog.image}
                                    alt={featuredBlog.title}
                                    className="blog-featured-image"
                                />
                            </div>
                        </section>

                        {/* Blog Cards */}
                        <div className="blog-cards-list">
                            {otherBlogs.map((blog, idx) => (
                                <div
                                    className="blog-card-horizontal"
                                    key={blog.id}
                                    data-aos="fade-up"
                                    data-aos-delay={200 + idx * 150}
                                    data-aos-duration="1200"
                                >
                                    <Row gutter={[16, 16]} style={{ width: "100%" }}>
                                        <Col lg={6} md={12} sm={12} xs={12}>
                                            <div className='blog-card-h-image-wrapper'>
                                                <img src={blog.image} alt={blog.title} className="blog-card-h-image" />
                                            </div>
                                        </Col>
                                        <Col lg={18} md={12} sm={12} xs={12}>
                                            <div className="blog-card-h-content">
                                                <div className="blog-card-h-meta">
                                                    <span className="blog-card-category">{blog.category}</span>
                                                    <span className="blog-card-date">{blog.date}</span>
                                                </div>
                                                <h2 className="blog-card-h-title">{blog.title}</h2>
                                                {typeof blog.content === 'string' ? (
                                                    <p className="blog-card-h-excerpt">{blog.content.slice(0, 40)}...</p>
                                                ) : (
                                                    <div className="blog-card-h-excerpt">
                                                        {blog.content}
                                                    </div>
                                                )}
                                                <button
                                                    className="blog-card-h-btn"
                                                    onClick={() => navigate(`/blogs/${blog.id}`)}
                                                >
                                                    Read full blog
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
};

export default Blog;
import React from "react";
import { Row, Col } from "antd";
import BlogData from "./BlogData";
import "./Blog.css"
import { SlCalender } from "react-icons/sl";

const Blog = () => {
    return (
        <section>
            <div>
                {/* <p className="textCenter">Blog</p> */}
                <h2 className="BigHeading textCenter">Articles & Resources</h2>
            </div>

            <div id="BlogContainer">
                <Row gutter={[16, 16]}>
                    {BlogData.length > 0 && (
                        <>
                            {/* First Blog - Left Column */}
                            <Col lg={10}>
                                <div className="LatestBlogContainer">
                                    <div className="LatestBlogImageContainer">
                                        <img src={BlogData[0].blogImage} alt={BlogData[0].blogTitle} />
                                    </div>
                                    {/* <br /> */}
                                    <div className="LatestBlogContentContainer">
                                        <p>{BlogData[0].keyword}</p>
                                        <br />
                                        <h2>{BlogData[0].blogTitle}</h2>
                                        {/* {BlogData[0].blogDescription} */}
                                    </div>
                                </div>
                            </Col>

                            {/* Remaining Blogs - Right Column */}
                            <Col lg={14}>
                                <div className="adjustSlicesContainer">
                                    {BlogData.slice(1).map((blog, index) => (
                                        <div key={index} className="BlogItem">
                                            <div>
                                                <h2>{blog.blogTitle}</h2>
                                                <br />
                                                <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
                                                    <span>{blog.keyword}</span>
                                                    <span style={{display:"flex",alignItems:"center",gap:"10px"}}><SlCalender />{blog.date}</span>
                                                </div>
                                            </div>
                                            {/* {blog.blogDescription} */}
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </>
                    )}
                </Row>
            </div>
        </section>
    );
};

export default Blog;

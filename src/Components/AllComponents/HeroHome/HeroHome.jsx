import React from "react";
import "./HeroHome.css"
import { Row, Col } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeroHome = () => {

    const PointsData = [
        {
            title: "450+ Satisfied Clients with 86% repeating Clients"
        },
        {
            title: "27+ Years of Experience"
        },
        {
            title: "Premium Quality"
        },
        {
            title: "Bespoke Services"
        }
    ]
    const images = [
        "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=2073&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=2073&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2073&auto=format&fit=crop"
    ];
    return (
        <>
            <section style={{ padding: "0px" }}>
                <div id="BhawalHomeContainer">
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="SideContentContainer">
                                    <div>
                                        <h2 className="BigHeading" data-aos="fade-up"
                                            data-aos-duration="800">One Stop Solution for all Your Stainless Steel Needs</h2>
                                    </div>
                                    <div>
                                        <p data-aos="fade-up"
                                            data-aos-duration="900">Precision in every piece, excellence in every alloy. Bhawal Metal Industries – crafting the future of stainless steel.</p>
                                    </div>
                                    <div className="AnimatedbtnContainer">
                                        <button className="ColourButton" data-aos="fade-right"
                                            data-aos-duration="100">View Catalogue <MdKeyboardArrowRight /></button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} style={{ width: "100%" }}>
                                <div>
                                    <div data-aos="fade-up"
                                        data-aos-duration="1000">
                                        <img src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading="lazy" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="BoxesContainer">
                    <Row style={{ height: "100%" }}>
                        {PointsData.map((item, index) => (
                            <Col key={index} lg={6} md={12} style={{ width: "100%" }}data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={index * 100}>
                                <div className="BoxEditContainer" 
                                  >
                                    <div>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>

        </>
    )
}
export default HeroHome
import React, { useEffect, useState, useRef } from "react";
import "./WhoAreWeHome.css";
import { Row, Col } from "antd";

const WhoAreWeHome = () => {
    const containerRef = useRef(null);
    const [firstWidth, setFirstWidth] = useState(40); // Start at 30%
    const [secondWidth, setSecondWidth] = useState(70); // Start at 70%

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                // Calculate scroll percentage (0 at top, 1 when fully in view)
                let scrollProgress = Math.max(0, Math.min(1, 0.6 - rect.top / viewportHeight));

                // Increase first width, decrease second width dynamically
                let newFirstWidth = Math.min(40 + scrollProgress * 50, 60); // Max 80%
                let newSecondWidth = Math.max(70 - scrollProgress * 50, 40); // Min 20%

                setFirstWidth(newFirstWidth);
                setSecondWidth(newSecondWidth);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section>
            <div id="WhoAreWeHomeContentContainer">
                <Row>
                    <Col lg={24}>
                        <h2 className="BigHeading textCenter">Who Are We?</h2>
                        <div className="AnimationMovingImagesContainer" ref={containerRef}>
                            <div className="WidthAdjustContainer">
                                <div className="WidthAdjust" style={{ width: `${firstWidth}%` }}>
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1674939647783-099acf70b5c4?q=80&w=1974&auto=format&fit=crop"
                                        alt=""
                                        loading="lazy"
                                    />
                                </div>

                                <div className="WidthAdjust" style={{ width: `${secondWidth}%` }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1602223114290-ba6de2938acc?q=80&w=1974&auto=format&fit=crop"
                                        alt=""
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                       <div className="ContentContainer">
                       <p className="textCenter">
                            Bhawal Metal Industries was established in the year 1996 with the aim of catering to the growing demands of Stainless Steel. Bhawal Metal Industries is a leading supplier and manufacturer of High Quality Stainless Steel Round Bars, Forged components, Drawing Based Components And Precision components. We have a team of young visionaries who endeavor for excellence in every aspect related to metals. We strongly believe in our core values and are always in the pursuit of success along the lines of ethical business practices. Keeping in mind its customer centric approach, timely delivery and quality products, the Company has grown in size and products range. Over the decades Bhawal Metal Industries has carved an unparallel position for itself in the steel industry of India and has built various congenial customer relations. Now with the new generation of entrepreneurs joining the company, the company aims at expanding on a global scale with the domestic supply and export of Stainless Steel long Products, Forged components, Drawing Based Components And Precision components.
                        </p>
                       </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default WhoAreWeHome;

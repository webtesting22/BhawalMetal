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
                        {/* <div className="AnimationMovingImagesContainer" ref={containerRef}>
                            <div className="WidthAdjustContainer">
                                <div className="WidthAdjust" style={{ width: `${firstWidth}%` }}>
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1674939647783-099acf70b5c4?q=80&w=1974&auto=format&fit=crop"
                                        alt=""
                                    
                                    />
                                </div>

                                <div className="WidthAdjust" style={{ width: `${secondWidth}%` }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1602223114290-ba6de2938acc?q=80&w=1974&auto=format&fit=crop"
                                        alt=""
                                  
                                    />
                                </div>
                            </div>
                        </div> */}
                        <div className="ContentContainer">
                            <p className="textCenter">
                                <strong>Bhawal Metal Industries</strong> was established in the year <strong>1996</strong> with the aim of catering to the growing demands of <strong>Stainless Steel</strong>.
                                <strong>Bhawal Metal Industries</strong> is a leading supplier and manufacturer of <strong>high-quality Stainless Steel Round Bars, Forged Components, Drawing-Based Components,</strong> and <strong>Precision Components</strong>.
                                We have a team of <em>young visionaries</em> who endeavor for excellence in every aspect related to metals.
                                We strongly believe in our <strong>core values</strong> and are always in pursuit of success along the lines of <em>ethical business practices</em>.
                                Keeping in mind its <strong>customer-centric approach</strong>, <strong>timely delivery</strong>, and <strong>quality products</strong>, the company has grown in size and product range.

                                Over the decades, <strong>Bhawal Metal Industries</strong> has carved an <em>unparalleled position</em> in India's steel industry and has built <em>strong, lasting customer relationships</em>.
                                Now, with the <em>new generation of entrepreneurs</em> joining the company, we aim to <strong>expand globally</strong> while continuing our domestic supply and export of
                                <strong>Stainless Steel Long Products, Forged Components, Drawing-Based Components,</strong> and <strong>Precision Components</strong>.
                            </p>

                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default WhoAreWeHome;

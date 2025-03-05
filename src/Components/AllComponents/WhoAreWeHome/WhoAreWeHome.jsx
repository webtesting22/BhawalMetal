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
                           <div>
                           <p className="textCenter" data-aos="fade-up"
     data-aos-duration="1000">
                                Bhawal Metal Industries was established in 1996 to meet the growing demand for stainless steel. We are a leading manufacturer and supplier of high-quality stainless steel round bars, forged components, drawing-based components, and precision components.
                            </p>
                            <br />
                            <p data-aos="fade-up"
     data-aos-duration="1200">Our team of young visionaries strives for excellence in every aspect of the metal industry. We strongly uphold our core values and pursue success through ethical business practices. With a customer-centric approach, timely delivery, and a commitment to quality, the company has expanded in both size and product range.  </p>
                            <br />
                            <p data-aos="fade-up"
     data-aos-duration="1400">Over the decades, Bhawal Metal Industries has secured a strong and distinguished position in India’s steel industry while building long-lasting customer relationships. Now, with a new generation of entrepreneurs joining the company, we aim to expand globally, continuing to supply and export stainless steel long products, forged components, drawing-based components, and precision components.</p>

                           </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default WhoAreWeHome;

import React, { useRef, useEffect, useState } from "react";
import "./UnwaveringEfforts.css";
import { Row, Col } from "antd";

const UnwaveringEfforts = () => {
    const sectionRef = useRef(null);
    const rightContainerRef = useRef(null);
    const [offset, setOffset] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const PointsData = [
        { title: <>650+ Satisfied Clients with 86% repeating Clients</> },
        { title: <>27+ Years of Experience</> },
        { title: <>50k+ Product Delivered</> },
        { title: <>Reduced Carbon Footprint through incorporating Circular Economy.</> }
    ];

    // Intersection Observer to detect when the section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0 } // Triggers when 30% of the section is visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    // Parallax effect - only active when section is visible
    useEffect(() => {
        const handleScroll = () => {
            if (isVisible && rightContainerRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                const parallaxOffset = sectionTop * -0.2; // Adjust speed as needed

                setOffset(parallaxOffset);
            }
        };

        const onScroll = () => requestAnimationFrame(handleScroll);

        if (isVisible) {
            window.addEventListener("scroll", onScroll);
        } else {
            setOffset(0);
            window.removeEventListener("scroll", onScroll);
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, [isVisible]);

    return (
        <div id="UnwaveringEffortsContentContainer" ref={sectionRef}>
            <div>
                <div className="AdjustUnwaveringImageContainer">
                    <div className="OverlayContainer">

                    </div>
                    <img src="https://images.unsplash.com/photo-1733683300412-fd4a1519f2cc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="AbsoluteContainer">
                    <Row style={{ height: "100%" }}>
                        <Col lg={10}>
                            <div className="ContentContainer">
                                <div>
                                    <h2 className="BigHeading" style={{ color: "white" }}>Unwavering Efforts to Produce Premium Quality Industrial Components</h2>
                                    <p>Every product at Bhawal Metal Industries is a cherished treasure designed and built with remarkable craftsmanship. As a precision components manufacturer in India, we have made sure to put in unwavering efforts in producing some intriguing and accurate industrial elements. We ensure that every production strategy meets customer specificities and optimum machine performance.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={14}>
                            <div
                                className="RightSideHeadingContainer"
                                ref={rightContainerRef}
                                style={{ transform: `translateY(${offset}px)`, transition: "transform 0.1s ease-out" }}
                            >
                                {PointsData.map((item, index) => (
                                    <div key={index}>
                                        <h2 className="BigHeading">{item.title}</h2>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default UnwaveringEfforts;

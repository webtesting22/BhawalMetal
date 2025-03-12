import React, { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import "./UnwaveringEfforts.css";
import { Row, Col } from "antd";

const UnwaveringEfforts = () => {
    const sectionRef = useRef(null);
    const rightContainerRef = useRef(null);
    const [offset, setOffset] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [startCounter, setStartCounter] = useState(false);

    const PointsData = [
        { title: "Satisfied Clients", value: 650, suffix: "+" },
        { title: "Repeating Clients", value: 86, suffix: "%" },
        { title: "Years of Experience", value: 27, suffix: "+" },
        { title: "Products Delivered", value: 50000, suffix: "+" }
    ];

     // Intersection Observer to detect when the section is visible
     useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounter(false); // Reset counter
                    setTimeout(() => setStartCounter(true), 300); // Restart after a short delay
                }
            },
            { threshold: 0.3 } // Triggers when 30% of the section is visible
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
        <section id="UnwaveringEffortsContentContainer"  ref={sectionRef}>
            <div className="overlayContainerUnwavering">

            </div>
            <div style={{ paddingTop: "0px" }}>
                <div className="AbsoluteContainer">
                    <Row style={{ height: "100%" }}>
                        <Col lg={24}>
                            <div className="ContentContainer">
                                <div>
                                    <h2 className="BigHeading"  style={{color:"white"}} data-aos="fade-up"
                                            data-aos-duration="1300">
                                        Unwavering Efforts to Produce Premium Quality Industrial Components
                                    </h2>
                                    <p data-aos="fade-up"
                                            data-aos-duration="1300">
                                        Every product at Bhawal Metal Industries is a valued creation, designed and built with remarkable craftsmanship.
                                        As a precision components manufacturer in India, we put in unwavering efforts to produce high-quality and accurate industrial components.
                                        We ensure that every production strategy aligns with customer specifications and ensures optimal machine performance.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={24} >
                            <div className="containerGap" style={{marginBottom:"0px"}}>
                                <div
                                    className="RightSideHeadingContainer "
                                    style={{ transform: `translateY(${offset}px)`, transition: "transform 0.1s ease-out" }}
                                  
                                >
                                    <Row>
                                        {PointsData.map((item, index) => (
                                            <Col lg={6} key={index} data-aos="fade-up"
                                            data-aos-duration="1200" data-aos-delay={index * 200} >
                                                <div>
                                                    <h2 style={{textAlign:"center"}}>
                                                        <CountUp
                                                            start={startCounter ? 0 : null}
                                                            end={item.value}
                                                            duration={3}
                                                            suffix={item.suffix}
                                                            delay={0.3 * index}
                                                            
                                                            style={{fontSize:"30px"}}
                                                        />
                                                    </h2>
                                                    <p style={{textAlign:"center",fontWeight:"500"}}>{item.title}</p>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default UnwaveringEfforts;

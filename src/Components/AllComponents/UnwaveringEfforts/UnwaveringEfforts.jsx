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
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredCard, setHoveredCard] = useState(null);

    const PointsData = [
        { title: "Satisfied Clients", value: 650, suffix: "+", icon: "👥" },
        { title: "Repeating Clients", value: 86, suffix: "%", icon: "🔄" },
        { title: "Years of Experience", value: 27, suffix: "+", icon: "⏱️" },
        { title: "Products Delivered", value: 50000, suffix: "+", icon: "📦" }
    ];

    // Mouse tracking for dynamic effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100
                });
            }
        };

        const section = sectionRef.current;
        if (section) {
            section.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (section) {
                section.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    // Intersection Observer to detect when the section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    setStartCounter(false);
                    setTimeout(() => setStartCounter(true), 300);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    // Enhanced parallax effect
    useEffect(() => {
        const handleScroll = () => {
            if (isVisible && rightContainerRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                const parallaxOffset = (sectionTop - windowHeight * 0.5) * -0.1;
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
        <section 
            id="UnwaveringEffortsContentContainer" 
            ref={sectionRef}
            className="futuristic-section"
        >
            {/* Enhanced overlay with dynamic gradient */}
            <div 
                className="overlayContainerUnwavering"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                        rgba(0, 0, 0, 0.4) 0%, 
                        rgba(0, 0, 0, 0.7) 50%, 
                        rgba(0, 0, 0, 0.85) 100%)`
                }}
            />
            
            {/* Animated grid background */}
            <div className="grid-overlay" />
            
            {/* Floating particles */}
            <div className="particles-container">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i} 
                        className="particle"
                        style={{
                            '--delay': `${i * 0.5}s`,
                            '--duration': `${15 + (i % 5) * 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="content-wrapper">
                <div className="AbsoluteContainer">
                    {/* Main content section */}
                    <div className="main-content-section">
                        <Row style={{ height: "100%" }} align="middle">
                            <Col lg={24}>
                                <div className="ContentContainer futuristic-content">
                                    <div className="content-block" data-aos="fade-up" data-aos-duration="1300">
                                        <div className="title-container">
                                            {/* <div className="title-accent-line" /> */}
                                            <h2 className="BigHeading futuristic-heading">
                                                Unwavering Efforts to Produce Premium Quality Industrial Components
                                            </h2>
                                            <div className="title-glow" />
                                        </div>
                                        
                                        <div className="description-container" data-aos="fade-up" data-aos-duration="1300">
                                            <p className="futuristic-description">
                                                Every product at Bhawal Metal Industries is a valued creation, designed and built with remarkable craftsmanship.
                                                As a precision components manufacturer in India, we put in unwavering efforts to produce high-quality and accurate industrial components.
                                                We ensure that every production strategy aligns with customer specifications and ensures optimal machine performance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* Stats section with futuristic cards */}
                    <div className="stats-section">
                        <Col lg={24}>
                            <div className="containerGap stats-container">
                                <div
                                    className="RightSideHeadingContainer futuristic-stats"
                                    ref={rightContainerRef}
                                    style={{ 
                                        transform: `translateY(${offset}px)`, 
                                        transition: "transform 0.1s ease-out" 
                                    }}
                                >
                                    <Row gutter={[24, 24]} justify="center">
                                        {PointsData.map((item, index) => (
                                            <Col lg={6} md={12} sm={24} xs={24} key={index}>
                                                <div 
                                                    className={`futuristic-card`}
                                                    onMouseEnter={() => setHoveredCard(index)}
                                                    onMouseLeave={() => setHoveredCard(null)}
                                                    data-aos="fade-up"
                                                    data-aos-duration="1200" 
                                                    data-aos-delay={index * 200}
                                                >
                                                    {/* Card background effects */}
                                                    <div className="card-bg-effect" />
                                                    <div className="card-border-effect" />
                                                    <div className="card-glow-effect" />
                                                    
                                                    {/* Card content */}
                                                    <div className="card-content">
                                                        <div className="card-icon">
                                                            <span>{item.icon}</span>
                                                        </div>
                                                        
                                                        <div className="card-number">
                                                            <h2>
                                                                <CountUp
                                                                    start={startCounter ? 0 : null}
                                                                    end={item.value}
                                                                    duration={3}
                                                                    suffix={item.suffix}
                                                                    delay={0.3 * index}
                                                                />
                                                            </h2>
                                                        </div>
                                                        
                                                        <div className="card-title">
                                                            <p>{item.title}</p>
                                                        </div>
                                                        
                                                        {/* Progress bar animation */}
                                                        {/* <div className="progress-bar">
                                                            <div 
                                                                className="progress-fill"
                                                                style={{ 
                                                                    '--progress': `${(item.value / (item.value > 1000 ? 50000 : 100)) * 100}%`,
                                                                    '--delay': `${index * 0.2}s`
                                                                }}
                                                            />
                                                        </div> */}
                                                    </div>

                                                    {/* Holographic effect */}
                                                    <div className="holographic-effect" />
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="floating-elements">
                <div className="floating-circle circle-1" />
                <div className="floating-circle circle-2" />
                <div className="floating-circle circle-3" />
            </div>
        </section>
    );
};

export default UnwaveringEfforts;
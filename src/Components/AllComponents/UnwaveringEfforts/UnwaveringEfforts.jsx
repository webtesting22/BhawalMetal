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
        { 
            title: "Satisfied Clients", 
            value: 650, 
            suffix: "+", 
            icon: (
                <svg className="clients-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4C19.6 4 16 7.6 16 12C16 16.4 19.6 20 24 20C28.4 20 32 16.4 32 12C32 7.6 28.4 4 24 4Z" fill="#840000"/>
                    <path d="M36 20C33.8 20 32 21.8 32 24C32 26.2 33.8 28 36 28C38.2 28 40 26.2 40 24C40 21.8 38.2 20 36 20Z" fill="#840000"/>
                    <path d="M12 20C9.8 20 8 21.8 8 24C8 26.2 9.8 28 12 28C14.2 28 16 26.2 16 24C16 21.8 14.2 20 12 20Z" fill="#840000"/>
                    <path d="M24 22C18.48 22 14 26.48 14 32V40C14 41.1 14.9 42 16 42H32C33.1 42 34 41.1 34 40V32C34 26.48 29.52 22 24 22Z" fill="#840000"/>
                    <path d="M36 30C33.34 30 31.14 31.24 29.86 33.14C30.56 35.68 32 37.9 34 39.5V40C34 41.1 34.9 42 36 42H42C43.1 42 44 41.1 44 40V36C44 32.69 41.31 30 38 30H36Z" fill="#840000"/>
                    <path d="M12 30C9.69 30 7 32.69 7 36V40C7 41.1 7.9 42 9 42H15C16.1 42 17 41.1 17 40V39.5C19 37.9 20.44 35.68 21.14 33.14C19.86 31.24 17.66 30 15 30H12Z" fill="#840000"/>
                </svg>
            )
        },
        { 
            title: "Repeating Clients", 
            value: 86, 
            suffix: "%", 
            icon: (
                <svg className="repeating-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4C13.5 4 5 12.5 5 23C5 33.5 13.5 42 24 42C34.5 42 43 33.5 43 23C43 12.5 34.5 4 24 4ZM24 38C15.7 38 9 31.3 9 23C9 14.7 15.7 8 24 8C32.3 8 39 14.7 39 23C39 31.3 32.3 38 24 38Z" fill="#840000"/>
                    <path d="M30.5 15.5L22 24L17.5 19.5L15 22L22 29L33 18L30.5 15.5Z" fill="#840000"/>
                    <path d="M35 14C35.6 14 36 13.6 36 13C36 12.4 35.6 12 35 12H33V10C33 9.4 32.6 9 32 9C31.4 9 31 9.4 31 10V12H29C28.4 12 28 12.4 28 13C28 13.6 28.4 14 29 14H31V16C31 16.6 31.4 17 32 17C32.6 17 33 16.6 33 16V14H35Z" fill="#840000"/>
                    <path d="M19 14C19.6 14 20 13.6 20 13C20 12.4 19.6 12 19 12H17V10C17 9.4 16.6 9 16 9C15.4 9 15 9.4 15 10V12H13C12.4 12 12 12.4 12 13C12 13.6 12.4 14 13 14H15V16C15 16.6 15.4 17 16 17C16.6 17 17 16.6 17 16V14H19Z" fill="#840000"/>
                </svg>
            )
        },
        { 
            title: "Years of Experience", 
            value: 27, 
            suffix: "+", 
            icon: (
                <svg className="experience-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4C13.5 4 5 12.5 5 23C5 33.5 13.5 42 24 42C34.5 42 43 33.5 43 23C43 12.5 34.5 4 24 4ZM24 38C15.7 38 9 31.3 9 23C9 14.7 15.7 8 24 8C32.3 8 39 14.7 39 23C39 31.3 32.3 38 24 38Z" fill="#840000"/>
                    <path d="M25 12H23V24L32 29L33 27L25 22.5V12Z" fill="#840000"/>
                    <circle cx="24" cy="23" r="2" fill="#840000"/>
                    <path d="M24 2C24.6 2 25 1.6 25 1C25 0.4 24.6 0 24 0C23.4 0 23 0.4 23 1C23 1.6 23.4 2 24 2Z" fill="#840000"/>
                    <path d="M24 46C24.6 46 25 45.6 25 45C25 44.4 24.6 44 24 44C23.4 44 23 44.4 23 45C23 45.6 23.4 46 24 46Z" fill="#840000"/>
                    <path d="M46 24C46.6 24 47 23.6 47 23C47 22.4 46.6 22 46 22C45.4 22 45 22.4 45 23C45 23.6 45.4 24 46 24Z" fill="#840000"/>
                    <path d="M2 24C2.6 24 3 23.6 3 23C3 22.4 2.6 22 2 22C1.4 22 1 22.4 1 23C1 23.6 1.4 24 2 24Z" fill="#840000"/>
                </svg>
            )
        },
        { 
            title: "Products Delivered", 
            value: 50000, 
            suffix: "+", 
            icon: (
                <svg className="products-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 12H32L28 8H20L16 12H8C5.8 12 4 13.8 4 16V36C4 38.2 5.8 40 8 40H40C42.2 40 44 38.2 44 36V16C44 13.8 42.2 12 40 12ZM40 36H8V16H18L22 12H26L30 16H40V36Z" fill="#840000"/>
                    <path d="M24 32C28.4 32 32 28.4 32 24C32 19.6 28.4 16 24 16C19.6 16 16 19.6 16 24C16 28.4 19.6 32 24 32ZM24 20C26.2 20 28 21.8 28 24C28 26.2 26.2 28 24 28C21.8 28 20 26.2 20 24C20 21.8 21.8 20 24 20Z" fill="#840000"/>
                    <path d="M36 20C37.1 20 38 19.1 38 18C38 16.9 37.1 16 36 16C34.9 16 34 16.9 34 18C34 19.1 34.9 20 36 20Z" fill="#840000"/>
                    <path d="M10 6H14V10H10V6Z" fill="#840000"/>
                    <path d="M34 6H38V10H34V6Z" fill="#840000"/>
                    <path d="M6 42H12V46H6V42Z" fill="#840000"/>
                    <path d="M36 42H42V46H36V42Z" fill="#840000"/>
                </svg>
            )
        }
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
        style={{paddingTop:"0px"}}
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
                                    <div className="content-block" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1300">
                                        <div className="title-container">
                                            {/* <div className="title-accent-line" /> */}
                                            <h2 className="BigHeading futuristic-heading">
                                                Unwavering Efforts to Produce Premium Quality Industrial Components
                                            </h2>
                                            <div className="title-glow" />
                                        </div>
                                        
                                        <div className="description-container" data-aos="blur-to-clear" data-aos-delay="250" data-aos-duration="1300">
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
                                                    data-aos="blur-to-clear"
                                                    data-aos-duration="1200" 
                                                    data-aos-delay={400 + index * 200}
                                                >
                                                    {/* Card background effects */}
                                                    <div className="card-bg-effect" />
                                                    <div className="card-border-effect" />
                                                    <div className="card-glow-effect" />
                                                    
                                                    {/* Card content */}
                                                    <div className="card-content">
                                                        <div className="card-icon">
                                                            {item.icon}
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
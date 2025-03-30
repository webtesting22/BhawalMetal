import React from "react";
import "./HeroHome.css";
import { Row, Col } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from "react-countup";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroHome = () => {

    const PointsData = [
        { title: "Satisfied Clients", number: 450 },
        { title: "Repeating Clients", number: 86 },
        { title: "Years of Experience", number: 27 },
        { title: "Premium Quality", number: 100 },
    ];

    const CarousalImages = [
        {
            img: "/Images/HomepageBanner/HomePageBanner1.jpg",
            title: "From Indian Roots to a Global Steel Leader",
            description: <>With decades of expertise, we are expanding our presence worldwide. Our new generation of entrepreneurs is driving innovation and growth. Bhawal Metal Industries continues to supply premium stainless steel products to industries across the globe.</>,
        },
        {
            img: "/Images/HomepageBanner/HomePageBanner2.jpg",
            title: "Precision in Manufacturing, Perfection in Every Product",
            description: <>We specialize in stainless steel round bars, forged components, and custom-engineered solutions. Every product we craft meets global quality standards, ensuring strength and longevity. Our commitment to excellence makes us a trusted name in the steel industry.</>,

        },
        {
            img: "/Images/HomepageBanner/HomePageBanner3.jpg",
            title: "Quality Steel, Trusted Service, Lasting Relationships",
            description: <>Since 1996, Bhawal Metal Industries has been committed to delivering top-tier stainless steel solutions. Our customer-first approach, ethical practices, and timely delivery set us apart. We take pride in building long-term partnerships based on trust and quality.</>,

        },
    ];

    return (
        <>
            <section style={{ padding: "0px" }}>
                <div id="BhawalHomeContainer">
                    <div style={{ height: "100%", }}>
                        <Swiper
                            spaceBetween={0}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            speed={800}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                            style={{ height: "100%" }}
                        >
                            {CarousalImages.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div style={{ height: "100%" }}>
                                        <div className="OverlayEffectContainer"></div>
                                        <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                                            <img src={item.img} alt={item.title} loading="lazy" />
                                            <div className="ContentContainerSwiperHome">
                                                <h1
                                                    data-aos="fade-up"
                                                    data-aos-duration="1000"
                                                    data-aos-delay={index * 200}
                                                    className="BigHeadingNormal"
                                                    id="HomePagTitle"
                                                >
                                                    {item.title}
                                                </h1>
                                                <br />
                                                <div className="Paragraph">
                                                    <p style={{ color: "white" }} data-aos="fade-up"
                                                        data-aos-duration="1000"
                                                        data-aos-delay={index * 200}>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>

                    {/* Counter Section */}
                    <div className="BoxesContainer">
                        <Row style={{ height: "100%" }}>
                            {PointsData.map((item, index) => (
                                <Col key={index} lg={6} md={12} style={{ width: "100%", height: "100%" }} >
                                    <div className="BoxEditContainer">
                                        {/* <div className="HoverableContainer">
                      <p>Read More</p>
                    </div> */}
                                        <div>
                                            {/* Animated Counter */}
                                            <h2 style={{ textAlign: "center" }}>
                                                {item.number !== null ? (
                                                    <CountUp start={0} end={item.number} duration={4} separator="," style={{ color: "#617E87", }} />
                                                ) : (
                                                    "Premium"
                                                )}
                                                {index === 0 ? "+" : index === 1 ? "%" : index === 2 ? "+" : "%"}
                                            </h2>
                                            <p style={{ fontWeight: "500" }}>{item.title}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroHome;

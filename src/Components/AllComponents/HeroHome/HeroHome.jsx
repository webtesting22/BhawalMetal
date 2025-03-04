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
            img: "/Images/HomepageBanner/HomePagebanner1.jpeg",
            title: "One Stop Solution for all Your Stainless Steel Needs"
        },
        {
            img: "https://images.unsplash.com/photo-1499359165151-4f7d7c46288c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Your Trusted Partner for Premium Stainless Steel Solutions"
        },
        {
            img: "https://images.unsplash.com/photo-1474674556023-efef886fa147?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D",
            title: "Excellence in Stainless Steel – Crafted for Your Needs"
        },
    ];

    return (
        <>
            <section style={{ padding: "0px" }}>
                <div id="BhawalHomeContainer">
                    <div style={{ height: "100%", }}>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
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
                                        <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <img src={item.img} alt="" />
                                            <div className="ContentContainerSwiperHome">
                                                <h1
                                                    className="BigHeadingNormal"
                                                    data-aos="fade-up"
                                                    data-aos-duration="1000"
                                                    data-aos-delay={`${index * 500}`} // Delay increases with index
                                                >
                                                    {item.title}
                                                </h1>
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
                                                    <CountUp start={0} end={item.number} duration={8} separator="," style={{ color: "#617E87", }} />
                                                ) : (
                                                    "Premium"
                                                )}
                                                {index === 0 ? "+" : index === 1 ? "%" : index === 2 ? "+" : ""}
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

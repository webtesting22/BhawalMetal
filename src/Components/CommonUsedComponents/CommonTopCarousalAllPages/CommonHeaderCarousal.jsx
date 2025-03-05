import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import "./CommonHeader.css";

const CommonHeaderCarousal = ({ slidesData, heading, tagline, pageLink }) => {
    return (
        <div id="CommonHeaderHeightAdjust">
            <div style={{ height: "100%" }}>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    centeredSlides={true}
                    loop={true}
                    // autoplay={{ delay: 2500, disableOnInteraction: false }}
                    speed={800}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    className="mySwiper"
                    style={{ height: "100%" }}
                >
                    {slidesData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div style={{ height: "100%" }}>
                                <div className="OverlayEffectContainer"></div>
                                <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <img src={item.img} alt="" loading="lazy"/>
                                    <div className="ContentContainerSwiperHome">
                                        <h1
                                            className="BigHeadingNormal"
                                            style={{ textAlign: "center" }}
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                            data-aos-delay={index * 200} 
                                        >
                                            {heading}
                                        </h1>
                                        <p style={{ textAlign: "center", color: "white" }} data-aos="fade-up"
                                            data-aos-duration="1300"
                                            data-aos-delay={index * 200} >{tagline}</p>
                                        <br />
                                        <span style={{ textAlign: "center", color: "white" }} 
                                            className="RouteLinks"
                                            data-aos="fade-up"
                                            data-aos-duration="1400"
                                            data-aos-delay={index * 200} 
                                        >
                                            <Link to="/">Home</Link>&nbsp;/ {pageLink}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CommonHeaderCarousal;

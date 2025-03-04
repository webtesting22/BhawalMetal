import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "./CommonHeader.css";

const CommonHeaderCarousal = ({ slidesData,heading,tagline }) => {
    return (
        <div id="CommonHeaderHeightAdjust">
            <div style={{ height: "100%" }}>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
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
                                    <img src={item.img} alt="" />
                                    <div className="ContentContainerSwiperHome">
                                        <h1
                                            className="BigHeadingNormal"
                                            style={{ textAlign: "center" }}
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                            data-aos-delay={`${index * 500}`} // Delay increases with index
                                        >
                                            {heading}
                                        </h1>
                                        <p style={{ textAlign: "center", color: "white" }} data-aos="fade-up"
                                            data-aos-duration="1200"
                                            data-aos-delay={`${index * 500}`}>{tagline}</p>
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

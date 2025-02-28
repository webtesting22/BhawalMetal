import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import "./ServicesCarousal.css";

const ServicesCarousal = () => {
    const ServicesData = [
        { img: "./Images/IndustriesIcons/AerospaceEngineering.png", title: "Aerospace and Defence" },
        { img: "./Images/IndustriesIcons/Marine Engineering 1.png", title: "Marine Engineering" },
        { img: "./Images/IndustriesIcons/OilandGas.png", title: "Oil & Gas" },
        { img: "./Images/IndustriesIcons/packaging.png", title: "Packaging" },
        { img: "./Images/IndustriesIcons/pharma.png", title: "Pharma" },
    ];

    return (
        <div id="ServicesCarousalContentContainer">
            <div>
                <h2 className="BigHeading textCenter">Why Choose Bhawal Metal Industries?</h2>
            </div>
            <div className='IndustriesSwiperContainer'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    // pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
                        768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
                        1024: { slidesPerView: 4, spaceBetween: 30 }, // Desktop
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {ServicesData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='IndustriesCardContainer'>
                                <div style={{height:"100%"}}>
                                    <div className='IndustriesCards'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className='HeadingContainerCarousal'>
                                        <h2 className='textCenter'>{item.title}</h2>
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

export default ServicesCarousal;
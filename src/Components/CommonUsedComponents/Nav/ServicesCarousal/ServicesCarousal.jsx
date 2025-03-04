import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import "./ServicesCarousal.css";

const ServicesCarousal = () => {
    const swiperRef = useRef(null);

    const ServicesData = [
        { img: "./Images/IndustriesIcons/AerospaceEngineering.png", title: "Aerospace and Defence" },
        { img: "./Images/IndustriesIcons/Marine Engineering 1.png", title: "Marine Engineering" },
        { img: "./Images/IndustriesIcons/OilandGas.png", title: "Oil & Gas" },
        { img: "./Images/IndustriesIcons/packaging.png", title: "Packaging" },
        { img: "./Images/IndustriesIcons/pharma.png", title: "Pharma" },
        { img: "", title: "Processing " },
        { img: "", title: "Water Treatment" }

    ];

    // Function to handle hover effect
    const handleMouseMove = (e) => {
        if (!swiperRef.current) return;
        const { clientX, currentTarget } = e;
        const { left, width } = currentTarget.getBoundingClientRect();
        const midpoint = left + width / 2;

        if (clientX > midpoint + 50) {
            swiperRef.current.slideNext(); // Slide left when hovering on right side
        } else if (clientX < midpoint - 50) {
            swiperRef.current.slidePrev(); // Slide right when hovering on left side
        }
    };

    return (
        <div id="ServicesCarousalContentContainer">
            <div className='IndustriesSearveContainer'>

                <div className='BackAttactContainer'>
                    <div className='IndustriesOverlayColor'></div>
                    <section style={{ position: "sticky" }}>
                        <div>
                            <h2 className="BigHeading textCenter" style={{ color: "white" }}>Industries We Have Served</h2>
                        </div>

                        <div className='containerGap' style={{ marginBottom: "0px" }}>
                            <div
                                className="SwiperHoverArea"
                                onMouseMove={handleMouseMove} // Detect mouse hover movement
                            >
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={20}
                                    freeMode={true}
                                    loop={true}
                                    speed={1000}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                      }}
                                    breakpoints={{
                                        320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
                                        768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
                                        1024: { slidesPerView: 4, spaceBetween: 30 }, // Desktop
                                    }}
                                    modules={[FreeMode, Pagination, Autoplay]}
                                    className="mySwiper"
                                    onSwiper={(swiper) => (swiperRef.current = swiper)} // Get Swiper instance
                                >
                                    {ServicesData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className='IndustriesCardContainer'>
                                                <div style={{ height: "100%" }}>
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
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ServicesCarousal;

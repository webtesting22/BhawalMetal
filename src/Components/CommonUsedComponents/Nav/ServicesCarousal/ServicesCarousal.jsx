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
        { img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Aerospace and Defence.png", title: "Aerospace and Defence" },
        { img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Marine Engineering.png", title: "Marine Engineering" },
        { img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Oil & Gas.png", title: "Oil & Gas" },
        { img: "", title: "Packaging" },
        { img: "", title: "Pharma" },
        { img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Processing .png", title: "Processing " },
        { img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Water Treatment.png", title: "Water Treatment" }

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
                            <h2 className="BigHeading textCenter" style={{ color: "white" }} data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">Industries We Have Served</h2>
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
                                            <div className='IndustriesCardContainer' data-aos="blur-to-clear" data-aos-delay={200 + index * 200} data-aos-duration="1200">
                                                <div style={{ height: "100%" }}>
                                                    <div className='IndustriesCards'>
                                                        <img src={item.img} alt={item.title} loading="lazy" />
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

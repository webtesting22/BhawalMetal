import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./WhyChooseHome.css"
import { IoMdStar } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { MdKeyboardArrowRight } from "react-icons/md";

const WhyChooseHome = () => {
    const swiperRef = useRef(null);
    const WhyChooseData = [
        {
            title: "Durable, High Quality Materials",
            image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Durable.png",
            description: <>
                <p>We understand the Importance of Quality material as it is a key to delivers a durable and high-performing Finished Product.</p>
                <p>To Achieve this we make sure that all our material is according to ASTM Standards & are Ultra okay, hence free from Unwanted cracks, slags & air gaps, To ensure this a strict quality check is maintained over all the phases of manufacturing.</p>
            </>
        },
        {
            title: "Sustainable & Mindful Manufacturing",
            image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Sustainable.png",
            description: <>
                <p>To overcome the pressing environmental concerns like climate change, increasing carbon Footprint and conserving resources for our future generations, Bhawal Metal Industries has incorporated principles of Circular economy in our manufacturing process, Hence decreasing our overall carbon footprint and efficiently using our resources and reducing overall waste.</p>
            </>
        },
        {
            title: "Experienced & Reliable Technical Support",
            image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Experienced.png",
            description: <>
                <p>Our dedicated team of experienced professionals who have the latest know-how of the latest technologies and the best practices to provide their customers with premium quality products and Pre & Post-Sales services. The companies motto excellence with metal is very deeply instilled in its work ethics and it strives to achieve customer satisfaction through our quality products and services.</p>
            </>
        },
        {
            title: "Customer Satisfaction",
            image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Customer Satisfaction.png",
            description: <>
                <p>We Believe in developing Everlasting Business relations with our clients and We keep working on it mindfully by taking regular feedbacks and improving our pre and post sales services. This Customer-centric approach and dedicated efforts to cater our clients better has helped us Grow and achieve 86% returning clients.</p>
            </>
        }
    ]
    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.start();
        }
    };

    return (
        <>
            <section>
                <div id="WhyChooseHomeContentContainer">
                    <div>
                        <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">Why Choose Bhawal Metal Industries?</h2>
                    </div>

                    <div className="SwiperContainerCardWhyChoose" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            loop={true}
                            freeMode={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}

                            speed={700}
                            breakpoints={{
                                1024: { slidesPerView: 3 }, // PC
                                768: { slidesPerView: 2 },  // Tablet
                                0: { slidesPerView: 1 }     // Mobile
                            }}
                            modules={[Autoplay, FreeMode, Pagination]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            className="mySwiper"
                        >
                            {WhyChooseData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div data-aos="blur-to-clear" data-aos-delay={200 + index * 200} data-aos-duration="1200">
                                        <div className="WhyChooseUsCardSwiperContainer">
                                            <div className="CardHeader">
                                                <div className="SwiperImageCardContainer">
                                                    <img src={item.image} alt={item.title} loading="lazy" />
                                                </div>
                                                <div className="CardTitleContainer">
                                                    <h3 className="CardTitle">{item.title}</h3>
                                                </div>
                                            </div>
                                            <div className="CardContent">
                                                <div className="CardDescription">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="CarousalbtnContainerEdit">
                            <div>
                                <button className="swiper-button prev" onClick={handlePrev}>
                                    <IoIosArrowBack size={24} />
                                </button>
                                <button className="swiper-button next" onClick={handleNext}>
                                    <IoIosArrowForward size={24} />
                                </button>
                            </div>
                            <div className="AnimatedbtnContainer">
                                <Link to="/industries"><button className="ColourButton" >Read More <MdKeyboardArrowRight /></button></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default WhyChooseHome
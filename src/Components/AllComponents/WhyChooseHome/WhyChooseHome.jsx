import React, { useRef } from "react";
import { Row, Col } from "antd";
import ServicesCarousal from "../../CommonUsedComponents/Nav/ServicesCarousal/ServicesCarousal";
import "./WhyChooseHome.css"
import { IoMdStar } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Autoplay,FreeMode, Pagination } from 'swiper/modules';
import { MdKeyboardArrowRight } from "react-icons/md";

const WhyChooseHome = () => {
    const swiperRef = useRef(null);
    const WhyChooseData = [
        {
            title: "Durable, High Quality Materials",
            image: "/Images/WhyChooseUsImages/DurableHighQualityMaterials.jpeg",
            description: <>
                <p>We understand the Importance of Quality material as it is a key to delivers a durable and high-performing Finished Product.</p>
                <p>To Achieve this we make sure that all our material is according to ASTM Standards & are Ultra okay, hence free from Unwanted cracks, slags & air gaps, To ensure this a strict quality check is maintained over all the phases of manufacturing.</p>
            </>
        },
        {
            title: "Sustainable & Mindful Manufacturing",
            image: "/Images/WhyChooseUsImages/Sustainable.jpeg",
            description: <>
                <p>To overcome the pressing environmental concerns like climate change, increasing carbon Footprint and conserving resources for our future generations, Bhawal Metal Industries has incorporated principles of Circular economy in our manufacturing process, Hence decreasing our overall carbon footprint and efficiently using our resources and reducing overall waste.</p>
            </>
        },
        {
            title: "Experienced & Reliable Technical Support",
            image: "/Images/WhyChooseUsImages/ExperiencedReliable.jpeg",
            description: <>
                <p>Our dedicated team of experienced professionals who have the latest know-how of the latest technologies and the best practices to provide their customers with premium quality products and Pre & Post-Sales services. The companies motto excellence with metal is very deeply instilled in its work ethics and it strives to achieve customer satisfaction through our quality products and services.</p>
            </>
        },
        {
            title: "Customer Satisfaction",
            image: "/Images/WhyChooseUsImages/CustomerSatisfaction.jpg",
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

    return (
        <>
            <section>
                <div id="WhyChooseHomeContentContainer">
                    <div>
                        <h2 className="BigHeading textCenter">Why Choose Bhawal Metal Industries?</h2>
                    </div>

                    <div className="SwiperContainerCardWhyChoose">
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
                            modules={[Autoplay,FreeMode, Pagination]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            className="mySwiper"
                        >
                            {WhyChooseData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div>
                                        <div className="WhyChooseUsCardSwiperContainer">
                                            <div className="SwiperImageCardContainer">
                                                <img src={item.image} alt="" />
                                            </div>
                                            {/* <br /> */}
                                            <div>
                                                <h2>{item.title}</h2>
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
                                <button className="ColourButton" >Read More <MdKeyboardArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default WhyChooseHome
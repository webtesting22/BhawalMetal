import React,{useEffect} from "react";
import "./AboutUs.css"
import { Row, Col } from "antd";
import AboutUsImage from "./AboutUsImage.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import UnwaveringEfforts from "../UnwaveringEfforts/UnwaveringEfforts";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import VisionMissionValues from "../VisionMissionValues/VisionMissionValues";
import CommonHeaderCarousal from "../../CommonUsedComponents/CommonTopCarousalAllPages/CommonHeaderCarousal";

const AboutUs = () => {

    const AboutUsCarousalImages = [
        {
            img: "https://images.unsplash.com/photo-1531053326607-9d349096d887?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "/Images/MaterialGrades.jpg"
        },
        // {
        //     img: ""
        // },


    ]
    const CarousalImages = [

        {
            img: "https://images.unsplash.com/photo-1499359165151-4f7d7c46288c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Your Trusted Partner for Premium Stainless Steel Solutions"
        },
        {
            img: "https://images.unsplash.com/photo-1474674556023-efef886fa147?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D",
            title: "Excellence in Stainless Steel – Crafted for Your Needs"
        },
    ];
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div>
                <CommonHeaderCarousal slidesData={CarousalImages} heading="About Us" tagline="BHAWAL METAL INDUSTRIES" pageLink="About Us"/>
            </div>
            {/* <div className="TopBannerContainerCommon">
                <div className="CommonTopContainer">
                    <div className="ImageBackContainerWithContent">
                        <div className="overlayContainer">

                        </div>
                        <img src="/Images/AboutusFinalBanner.png" alt="" />
                    </div>
                    <div className="ContentContainerTopheader">
                        <div>
                            <h2 className="BigHeading" style={{ margin: "0px" }} >About Us</h2>
                            <p >BHAWAL METAL INDUSTRIES</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <section id="AboutUsContainer">

                <div className="contentInfoContainer">
                    <Row>
                        <Col lg={24}>
                            <div className="AboutUsContentContainer">
                                <div >
                                    <h2 className="BigHeading " data-aos="fade-up"
                                            data-aos-duration="1200">About Bhawal Metal Industries </h2>
                                    <br />
                                    <p data-aos="fade-up"
                                            data-aos-duration="1400">Bhawal Metal Industries was established in 1996 to meet the growing demand for stainless steel. We are a leading manufacturer and supplier of high-quality stainless steel round bars, forged components, drawing-based components, and precision components. </p>
                                    <br />
                                    <p data-aos="fade-up"
                                            data-aos-duration="1200">Our team of young visionaries strives for excellence in every aspect of the metal industry. We strongly believe in our core values and are committed to ethical business practices. With a customer-centric approach, timely delivery, and a focus on quality, the company has expanded in both size and product range.
                                    </p>
                                    <br />
                                    <p data-aos="fade-up"
                                            data-aos-duration="1400">Over the decades, Bhawal Metal Industries has secured a strong position in India’s steel industry and built long-lasting customer relationships. Now, with a new generation of entrepreneurs joining the company, we aim to expand globally while continuing to supply and export stainless steel long products, forged components, drawing-based components, and precision components.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={24}>
                            <div >
                                <br />
                                <div className="AboutUsImageContainer" data-aos="fade-up"
                                            data-aos-duration="1300">
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 1500,
                                            disableOnInteraction: false,
                                        }}
                                        effect={'fade'}
                                        // pagination={{
                                        //     clickable: true,
                                        // }}
                                        // navigation={true}
                                        modules={[Autoplay, EffectFade, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        {AboutUsCarousalImages.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <div>
                                                    <div>
                                                        <img src={item.img} alt=""  loading="lazy"/>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    {/*  */}
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
                <VisionMissionValues />
                <div id="WhatDoesBhawalContainer" style={{ marginBottom: "0px", paddingBottom: "0px" }}>
                    <div>
                        <div>
                            <h2 className="BigHeading textCenter" >What Does Bhawal Metal Do?</h2>
                            <p className="textCenter" >Bhawal Metal Industries operates in three major segments and is one of the first fully forward-integrated contract manufacturing companies based in India.</p>
                        </div>
                    </div>
                    <div className="containerGap contentInfoContainer" style={{ marginBottom: "0px",paddingBottom:"0px" }}>
                        <Row>
                            <Col lg={10} md={24}>
                                <div className="WhatDoesBhawalImageContainer">
                                    <div data-aos="fade-right"
                                            data-aos-duration="1300">
                                        <img src="/Images/WhatDoesSectionImage.png" alt=""  loading="lazy"/>

                                    </div>
                                    <br />
                                </div>
                            </Col>
                            <Col lg={14} md={24}>
                                <div style={{ display: "flex", alignItems: "center", height: "100%" }} data-aos="fade-left"
                                            data-aos-duration="1300">
                                    <div>
                                        <p><b>Raw Material Supply</b></p>
                                        <p>We assist our clients even before the manufacturing process begins by providing high-quality raw materials such as stainless steel round bars, flat bars, hex bars, and square bars. To ensure the highest quality, we conduct various tests, including chemical, physical, mechanical, ultrasonic, micro, and IGC tests, through government and internationally approved certification bodies. This guarantees that our clients receive only the best-in-class products. </p>
                                        <br />
                                        <p><b>Forged Components</b></p>
                                        <p> In addition to stainless steel long products, we supply premium-quality forged components. With our state-of-the-art forging unit, we manufacture forged circles, forged rings, forged blocks, forged flat bars, and forged flanges. We also produce forged components with complex shapes using the die forging method.</p>
                                        <br />
                                        <p><b>Precision Machining</b></p>
                                        <p>Our precision machining unit helps clients reduce machining time, lower costs, and minimize labor and transportation investments while preventing rejections. We understand that high-quality materials are essential for delivering durable and high-performing finished products.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <p>To achieve this, we maintain strict quality checks at every stage of manufacturing. This commitment to quality has allowed us to serve our clients better and gain a competitive edge in the market, as superior raw materials are the foundation of excellent end products.</p>
                        <div>
                            <div className="AnimatedbtnContainer">
                                <button className="ColourButton" >View All Products <MdKeyboardArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <UnwaveringEfforts />
        </>
    )
}
export default AboutUs
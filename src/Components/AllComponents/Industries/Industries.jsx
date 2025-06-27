import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Row, Col, Modal } from "antd";
import "./SlidesStyles.css";
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { MdKeyboardArrowRight } from "react-icons/md";
import CommonHeaderCarousal from "../../CommonUsedComponents/CommonTopCarousalAllPages/CommonHeaderCarousal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import IndustriesData from "./IndustriesData";
const Industries = () => {
    const swiperRef = useRef(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const showModal = (industry) => {
        setSelectedIndustry(industry);
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
        setSelectedIndustry(null);
    };
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
    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
    };

    const goToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
    };
    return (
        <>
            <div >
                <CommonHeaderCarousal slidesData={CarousalImages} heading="Industries" tagline="BHAWAL METAL INDUSTRIES" pageLink="Industries" />
                <section >
                    <div>
                        <div id="Industries">
                            <Row>
                                <Col lg={12} md={24} style={{ width: "100%" }}>
                                    <div>
                                        <div className="AboutUsImageContainer" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/W7GnePMTWHjkPwRS4IZo/MetalIndustries.jpg" alt="" loading="lazy" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={24} style={{ width: "100%" }}>
                                    <div className="AboutUsContentContainer">
                                        <div >
                                            {/* <h2></h2> */}
                                            <p data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">Bhawal Metal Industries has over 27 years of experience in stainless steel and manufacturing. Our journey as precision components manufacturers in India began in 1997 when we started establishing our presence in various domestic and international markets. Over the years, we have built a strong network of partnerships and supply chains across the country, delivering products to different industrial sectors. </p>
                                            <br />
                                            <p data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200"><b>Personalized Products</b></p>
                                            <p data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1200">As precision components manufacturers, we also provide custom-designed products tailored to meet our customers' unique requirements.</p>
                                            <br />
                                            <p data-aos="blur-to-clear" data-aos-delay="500" data-aos-duration="1200"><b>Superior Quality</b></p>
                                            <p data-aos="blur-to-clear" data-aos-delay="600" data-aos-duration="1200">At Bhawal Metal, we are committed to producing highly durable and corrosion-resistant industrial components of exceptional quality, crafted by skilled professionals. High-quality materials play a crucial role in delivering durable and high-performing finished products. To achieve this, we ensure that all our materials comply with ASTM standards and are ultra-sound, free from unwanted cracks, slags, and air gaps. A strict quality check is maintained throughout all phases of manufacturing to uphold these standards.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>
                <section style={{ paddingTop: "0px" }}>
                    <div id="SlidesStyles">
                        <div>
                            <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">Industries We Serve</h2>
                            <p className="textCenter" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1200">Over the years, Bhawal Metal Industries has been catering to various industries across the nation. We take pride in our achievements across diverse sectors, from automobiles to aerospace and defense. With advanced technology and expertise in material science, we have developed innovative products to meet the needs of these industries.</p>
                        </div>

                        <div className="IndustriesServedCards">
                            <div className="SingleSlideContainer">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    speed={700}
                                    modules={[Autoplay]}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                    onSlideChange={handleSlideChange}
                                    className="singleSlideSwiper"
                                >
                                    {IndustriesData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="SingleSlideContent" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                                                <Row gutter={[40, 40]} align="middle">
                                                    <Col lg={12} md={24} xs={24}>
                                                        <div className="SlideContentLeft">
                                                            <h2 className="SlideTitle">{item.title}</h2>
                                                            <div className="SlideDescription">
                                                                {item.description}
                                                            </div>
                                                            <div className="SlideButtonContainer">
                                                                <button className="ColourButton" onClick={() => showModal(item)}>
                                                                    Read More <MdKeyboardArrowRight />
                                                                </button>
                                                            </div>
                                                            {/* Mobile Read More Button */}
                                                            <div className="MobileReadMoreButton">
                                                                <button className="ColourButton" onClick={() => showModal(item)}>
                                                                    Read More <MdKeyboardArrowRight />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={12} md={24} xs={24}>
                                                        <div className="SlideImageRight">
                                                            <img src={item.image} alt={item.title} loading="lazy" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Dot Navigation */}
                                <div className="DotNavigation">
                                    {IndustriesData.map((item, index) => (
                                        <button
                                            key={index}
                                            className={`dot-button ${currentSlide === index ? 'active' : ''}`}
                                            onClick={() => goToSlide(index)}
                                            aria-label={`Go to ${item.title}`}
                                        >
                                            {item.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                    <Modal
                        title={selectedIndustry?.title}
                        open={isModalVisible}
                        onCancel={handleClose}
                        footer={null}
                        centered
                        width={900}
                    >
                        {selectedIndustry && (
                            <>
                                <div className="ModalImageContainer">
                                    <Row>
                                        <Col lg={12}>
                                            <img src={selectedIndustry.image} alt={selectedIndustry.title} loading="lazy" />

                                        </Col>
                                        <Col lg={12}>
                                            <p style={{ marginTop: "10px" }}>{selectedIndustry.description}</p>
                                        </Col>
                                    </Row>
                                </div>

                            </>
                        )}
                    </Modal>
                </section>
                {/* </section> */}
            </div >
        </>
    )
}
export default Industries

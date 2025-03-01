import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import IndustriesData from "./IndustriesData";
import { Row, Col,Modal } from "antd";
import "./SlidesStyles.css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MdKeyboardArrowRight } from "react-icons/md";
const Industries = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState(null);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    const goToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
    };
    const showModal = (industry) => {
        setSelectedIndustry(industry);
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
        setSelectedIndustry(null);
    };

    return (
        <>
            <div >
                <div className="TopBannerContainerCommon">
                    <div className="CommonTopContainer">
                        <div className="ImageBackContainerWithContent">
                            <div className="overlayContainer">

                            </div>
                            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="ContentContainerTopheader">
                            <div>
                                <h2 className="BigHeading" style={{ margin: "0px" }}>Industries</h2>
                                <p>BHAWAL METAL INDUSTRIES</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section >
                    <div id="Industries">
                        <Row>
                            <Col lg={12}>
                                <div>
                                    <div className="AboutUsImageContainer">
                                        <img src="/Images/IndustriesTopImage.avif" alt="" loading="lazy" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="AboutUsContentContainer">
                                    <div>
                                        {/* <h2></h2> */}
                                        <p>Bhawal Metal Industries has an experience of over 27 years in the field of stainless steel and manufacturing. Our journey as precision components manufacturers in India dates back to 1997 when we began establishing our presence in different sectors of domestic and international markets. We have established a vast network of partnerships and supply chains nationwide with products shipped to different industrial sectors. </p>
                                        <br />
                                        <p><b>Personalized Products</b></p>
                                        <p>We, as precision components manufacturers, also supply custom-designed products which are manufactured according to the customers’ unique needs.</p>
                                        <br />
                                        <p><b>Superior Quality</b></p>
                                        <p>At Bhawal Metal, we envision high durability and corrosion-resistant industrial components of exceptional quality crafted by the finest craftsman our Quality material plays a key role in delivering our clients a durable and high-performing Finished Product.
                                            To Achieve this we make sure that all our material is according to ASTM Standards & are Ultra okay, hence free from Unwanted cracks, slags & air gaps, To ensure this a strict quality check is maintained over all the phases of manufacturing.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                <div id="SlidesStyles">
                    <div>
                        <h2 className="BigHeading textCenter">Industries We Serve</h2>
                        <p className="textCenter">Over the years of establishment, Bhawal Metal Industries has been serving various industries nationwide. We take pride in our achievements across diverse sectors, from automobiles to aerospace and defense. With our advanced technology and material science, we have produced innovative products for these industrial sectors.</p>
                    </div>
                    <div className="SwiperContainerIndustries">
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={handleSlideChange}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            speed={800}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper">
                            {IndustriesData.map((item, index) => (
                                <SwiperSlide key={index}

                                >
                                    <div className="SwiperMainContainer">
                                        <div>
                                            <Row>
                                                <Col lg={14}>
                                                    <div>
                                                        <div>
                                                            <h2 style={{ textTransform: "uppercase" }}><b>{item.title}</b></h2>
                                                            <br />
                                                            <div>
                                                                {item.description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={10}>
                                                    <div className="CardImageContainerIndustries">
                                                        <div>
                                                            <img src={item.image} alt="" />
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="DynamicPagination">
                        <div className="DynamicPagination">
                            {IndustriesData.map((item, index) => (
                                <span
                                    key={index}
                                    className={`pagination-item ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                >
                                    {item.title}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="IndustriesDataToShowModals">
                        <div>
                            <Row>
                                {IndustriesData.map((item, index) => (
                                    <Col lg={24} key={index} style={{ width: "100%" }}>
                                        <div className="IndustriesMobileCards">
                                            <div>
                                                <h2>{item.title}</h2>
                                                <div className="AnimatedbtnContainer">
                                                    <button className="ColourButton" data-aos="fade-right"
                                                        data-aos-duration="100"    onClick={() => showModal(item)}>Read More <MdKeyboardArrowRight /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
                <Modal 
                        title={selectedIndustry?.title} 
                        open={isModalVisible} 
                        onCancel={handleClose} 
                        footer={null}
                        centered
                    >
                        {selectedIndustry && (
                            <>
                                <div className="ModalImageContainer">
                                    <img src={selectedIndustry.image} alt={selectedIndustry.title} style={{ width: "100%", borderRadius: "8px" }} />
                                </div>
                                <p style={{ marginTop: "10px" }}>{selectedIndustry.description}</p>
                            </>
                        )}
                    </Modal>

            </div>
        </>
    )
}
export default Industries

import React from "react";
import "./FacilitiesAndServices.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { Row, Col, Image } from "antd";
const FacilitiesAndServices = () => {


    const FacilitiesCarousalImages = [
        {
            image: "/Images/FacilitiesAndServices/Bigbanner.jpeg"
        },
        {
            image: "https://images.unsplash.com/photo-1444738720667-27446e3f293d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const GalleryImages = [
        {
            img: "/Images/FacilitiesAndServices/Gallery1.png"
        },
        {
            img: "/Images/FacilitiesAndServices/Gallery2.png"
        },
        {
            img: "/Images/FacilitiesAndServices/Gallery3.png"
        },
        {
            img: "/Images/FacilitiesAndServices/Gallery4.png"
        },
        {
            img: "/Images/FacilitiesAndServices/Gallery5.png"
        },
        {
            img: "/Images/FacilitiesAndServices/Gallery6.png"
        },
        {
            img: "/Images/FacilitiesAndServices/Gallery7.png"
        },
        {
            img: "/Images/FacilitiesAndServices/Gallery8.png"
        },
        {
            img: "/Images/FacilitiesAndServices/Gallery9.png"
        }

    ]
    return (
        <>
            <div className="TopBannerContainerCommon">
                <div className="CommonTopContainer">
                    <div className="ImageBackContainerWithContent">
                        <div className="overlayContainer">

                        </div>
                        <img src="https://images.unsplash.com/photo-1516959328599-c7ca70a9dbcb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="ContentContainerTopheader">
                        <div>
                            <h2 className="BigHeading" style={{ margin: "0px" }}>Facilities and Services </h2>
                            <p>BHAWAL METAL INDUSTRIES</p>
                        </div>
                    </div>
                </div>
            </div>
            <section id="FacilitiesAndServices">
                <div className="FacilitiesAndServicesContentContainer contentInfoContainer">
                    <div>
                        <p>Fueled by burning ambition and driven by its core values, Bhawal Metal Industries specialize in niche precision forgings, fully-machined, sub-assembled and precision products for our domestic and global customers. We have hot forging facilities, heat treatment equipped with oil and water quenching facilities and precision machining facility equipped with high end CNCs, VMCs and SPMs, to achieve required tolerances as per customer specifications.</p>
                        <br />
                        <p>Over the last two decades the organization has developed into an innovative, customer oriented and robust organization, known for high quality carbon and alloy steel forged and machined components. We provide engineering, design, development and validation support, in close collaboration with our customers.</p>
                        <br />
                        <p>Keeping in mind our customer-centric approach and our pledge to provide quality materials, the company provides various value addition services to our clients like -</p>
                    </div>
                    <br />
                    <div>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            effect={'fade'}
                            speed={800}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            // navigation={true}
                            modules={[Autoplay, EffectFade, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {FacilitiesCarousalImages.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div>
                                        <div >
                                            <img src={item.image} alt="" loading="lazy" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="containerGap">
                        <h2 className="BigHeading textCenter">HOT FORGING</h2>
                    </div>
                </div>
            </section>
            {/* <section style={{ padding: "0px" }}>
                <div className="HOTFORGINGContainer">
                    <div>
                        <Row>
                            <Col lg={10}>
                                <div>
                                    <div className="verticalSwiperContainer">
                                        <Swiper
                                            direction={'vertical'}
                                            spaceBetween={30}
                                            centeredSlides={true}
                                            autoplay={{
                                                delay: 1500,
                                                disableOnInteraction: false,
                                            }}
                                            effect={'fade'}
                                            speed={800}
                                            // pagination={{
                                            //     clickable: true,
                                            // }}
                                            // navigation={true}
                                            modules={[Autoplay, EffectFade, Pagination, Navigation]}
                                            className="mySwiper"
                                        >
                                            {FacilitiesCarousalImages.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <div>
                                                        <div>
                                                            <img src={item.image} alt="" loading="lazy" style={{ width: "100%" }} />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={14}>
                                <div>
                                    <div>
                                        <p>We forge components in ferrous materials like alloy steel and stainless steel.</p>
                                        <p>Our strengths include:</p>
                                        <ul>
                                            <li>
                                                Bhawal Metal Provides “first-time-right” products.
                                            </li>
                                            <li>Net-Shape, Near-Net-Shape. Flashless Forging</li>
                                            <li>Grain Density management & failure analysis</li>
                                            <li>Adherence to VDA-6.3</li>
                                        </ul>
                                        <h2>Forging Infrastructure</h2>
                                        <p>Heating Facility</p>
                                        <p>Open Die Forging Facility</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div>
                        <Row>
                            <Col lg={8}>

                            </Col>
                            <Col lg={14}>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section > */}
            <section id="PRECISIONMACHINEFACILITY ">
                <div className="contentInfoContainer">
                    <div>
                        <div className="containerGap">
                            <h2 className="BigHeading textCenter">PRECISION MACHINE FACILITY </h2>
                        </div>
                    </div>
                    <div>
                        <p>Bhawal Metal Industries offers excellent outsourced machining facilities for various product lines which enable products to be supplied either in the pre-machined or completely-machined condition with exceptional quality. Our unabated emphasis on quality and on-time delivery allows us to meet customer demands.</p>
                        <br />
                        <p>We have dedicated lines for machining set-up and Outsourcing capabilities to deliver our clients with following services:</p>
                    </div>
                     <br />
                    <div>
                        <Row>
                            {GalleryImages.map((item, index) => (
                                <Col lg={8} md={12} style={{width:"100%",height:"100%"}}>
                                    <div>
                                        <div className="GalleryImageContainer">
                                            <Image src={item.img} alt="" />
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>

            </section>
        </>
    )
}
export default FacilitiesAndServices
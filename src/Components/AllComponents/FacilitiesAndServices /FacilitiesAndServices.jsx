import React,{useEffect} from "react";
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
import CommonHeaderCarousal from "../../CommonUsedComponents/CommonTopCarousalAllPages/CommonHeaderCarousal";
const FacilitiesAndServices = () => {
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <CommonHeaderCarousal slidesData={CarousalImages} heading="Facilities and Services" tagline="BHAWAL METAL INDUSTRIES" />
            <section id="FacilitiesAndServices">
                <div className="FacilitiesAndServicesContentContainer contentInfoContainer">
                    <div>
                        <p data-aos="fade-up"
                            data-aos-duration="1000">Fueled by burning ambition and driven by its core values, Bhawal Metal Industries specialize in niche precision forgings, fully-machined, sub-assembled and precision products for our domestic and global customers. We have hot forging facilities, heat treatment equipped with oil and water quenching facilities and precision machining facility equipped with high end CNCs, VMCs and SPMs, to achieve required tolerances as per customer specifications.</p>
                        <br />
                        <p data-aos="fade-up"
                            data-aos-duration="1000">Over the last two decades the organization has developed into an innovative, customer oriented and robust organization, known for high quality carbon and alloy steel forged and machined components. We provide engineering, design, development and validation support, in close collaboration with our customers.</p>
                        <br />
                        <p data-aos="fade-up"
                            data-aos-duration="1000">Keeping in mind our customer-centric approach and our pledge to provide quality materials, the company provides various value addition services to our clients like -</p>
                    </div>
                    <br />
                    <div data-aos="fade-up"
                        data-aos-duration="1200">
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
                            <h2 className="BigHeading textCenter" data-aos="fade-right"
                                data-aos-duration="1200">PRECISION MACHINE FACILITY </h2>
                        </div>
                    </div>
                    <div>
                        <p data-aos="fade-right"
                            data-aos-duration="1000">Bhawal Metal Industries offers excellent outsourced machining facilities for various product lines which enable products to be supplied either in the pre-machined or completely-machined condition with exceptional quality. Our unabated emphasis on quality and on-time delivery allows us to meet customer demands.</p>
                        <br />
                        <p data-aos="fade-right"
                            data-aos-duration="1000">We have dedicated lines for machining set-up and Outsourcing capabilities to deliver our clients with following services:</p>
                    </div>
                    <br />
                    <div>
                        <Row>
                            {GalleryImages.map((item, index) => (
                                <Col lg={8} md={12} style={{ width: "100%", height: "100%" }}>
                                    <div data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay={index * 200} >
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
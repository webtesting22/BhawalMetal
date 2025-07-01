import React, { useEffect } from "react";
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
            image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/iB005PNLl6VQdUpCGMdL/Forging Hammer ( process of Forging ).png"
        },
        {
            image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/Z1ktLn7z3yVUD6SDuQh4/Heat Treatment.jpg"
        }
    ]

    const GalleryImages = [
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/1.png"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/2.jpg"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/3.jpeg"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/4.jpg"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/5.png"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/6.png"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/7.jpg"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/8.jpg"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/9.png"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/10.png"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/11.jpg"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/12.png"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/13.jpg"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/14.jpg"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/15.jpg"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/16.jpg"
        },
        {
            img: "/Images/FacilitiesAndServices/GalleryImages/17.jpg"
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <CommonHeaderCarousal slidesData={CarousalImages} heading="Facilities and Services" tagline="BHAWAL METAL INDUSTRIES" pageLink="Facilities and Services" />
            <section id="FacilitiesAndServices" style={{ paddingBottom: "0px" }}>
                <div className="FacilitiesAndServicesContentContainer contentInfoContainer" style={{ paddingBottom: "0px" }}>
                    <div>
                        <p data-aos="blur-to-clear"
                            data-aos-delay="100"
                            data-aos-duration="800">Fueled by ambition and driven by its core values, Bhawal Metal Industries specializes in niche precision forgings, fully machined, sub-assembled, and precision products for both domestic and global customers. We have advanced hot forging facilities, heat treatment systems with oil and water quenching, and a precision machining unit equipped with high-end CNCs, VMCs, and SPMs to achieve the required tolerances as per customer specifications. </p>
                        <br />
                        <p data-aos="blur-to-clear"
                            data-aos-delay="200"
                            data-aos-duration="800">Over the past two decades, the company has evolved into an innovative, customer-focused, and robust organization, recognized for high-quality carbon and alloy steel forged and machined components. We provide engineering, design, development, and validation support in close collaboration with our customers.</p>
                        <br />
                        <p data-aos="blur-to-clear"
                            data-aos-delay="300"
                            data-aos-duration="800">With our customer-centric approach and commitment to delivering quality materials, we offer various value-added services, including:</p>
                    </div>
                    <br />
                    <div className="FacilitiesAndServicesContentSwiper" data-aos="blur-to-clear"
                        data-aos-delay="400"
                        data-aos-duration="1000">
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
                                        <div data-aos="blur-to-clear" data-aos-delay={500 + index * 200} data-aos-duration="1000">
                                            <img src={item.image} alt="" style={{ width: "100%" }} loading="lazy" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="containerGap">
                        <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="700" data-aos-duration="1000">HOT FORGING</h2>
                    </div>

                    {/* Hot Forging Content Layout */}
                    <div className="HotForgingLayout">
                        {/* Introduction Section */}
                        <div className="ForgingIntroSection" data-aos="blur-to-clear" data-aos-delay="800" data-aos-duration="1000">
                            <Row gutter={[40, 40]} align="middle">
                                <Col lg={10} md={12} sm={24} xs={24} style={{ width: "100%" }}>
                                    <div className="ForgingHeroImage" style={{ width: "100%" }}>
                                        <Image
                                            src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image1.png"
                                            alt="Hot Forging Process"
                                            loading="lazy"
                                            style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "16px" }}
                                        />
                                    </div>
                                </Col>
                                <Col lg={14} md={12} sm={24} xs={24}>
                                    <div className="ForgingIntroContent">
                                        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#666", marginBottom: "25px" }}>
                                            We forge components in ferrous materials like alloy steel and stainless steel.
                                        </p>
                                        <h4 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#617E87", marginBottom: "20px" }}>
                                            Our strengths include:
                                        </h4>
                                        <div className="StrengthsList">
                                            <div className="StrengthItem">
                                                <span className="StrengthIcon">✓</span>
                                                <span>Bhawal Metal Provides "first-time-right" products.</span>
                                            </div>
                                            <div className="StrengthItem">
                                                <span className="StrengthIcon">✓</span>
                                                <span>Net-Shape, Near-Net-Shape, Flashless Forging</span>
                                            </div>
                                            <div className="StrengthItem">
                                                <span className="StrengthIcon">✓</span>
                                                <span>Grain Density management & failure analysis</span>
                                            </div>
                                            <div className="StrengthItem">
                                                <span className="StrengthIcon">✓</span>
                                                <span>Adherence to VDA-6.3</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        {/* Infrastructure Section */}
                        <div className="InfrastructureSection">
                            <h3 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1000" style={{ marginBottom: "50px", color: "#617E87" }}>
                                Forging Infrastructure
                            </h3>

                            {/* Heating Facility */}
                            <div className="FacilityCard" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="800">
                                <Row gutter={[32, 32]} align="middle">
                                    <Col lg={8} md={10} sm={24} xs={24}>
                                        <div className="FacilityImage">
                                            <Image
                                                src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image2.png"
                                                alt="Heating Facility"
                                                loading="lazy"
                                                style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "12px" }}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={16} md={14} sm={24} xs={24}>
                                        <div className="FacilityContent">
                                            <h4 style={{ color: "#617E87", fontSize: "1.6rem", fontWeight: "600", marginBottom: "20px" }}>
                                                Heating Facility
                                            </h4>
                                            <div className="FacilityTable">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Oil Fired Box Type Furnace</th>
                                                            <th>Capacity</th>
                                                            <th>Dimension</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>No. of Furnace</td>
                                                            <td>10 Ton</td>
                                                            <td>5m x 2m x 5m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>-</td>
                                                            <td>-</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* Open Die Forging */}
                            <div className="FacilityCard" data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="800">
                                <Row gutter={[32, 32]} align="middle">
                                    <Col lg={8} md={10} sm={24} xs={24}>
                                        <div className="FacilityImage">
                                            <Image
                                                src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image3.png"
                                                alt="Open Die Forging"
                                                loading="lazy"
                                                style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "12px" }}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={16} md={14} sm={24} xs={24}>
                                        <div className="FacilityContent">
                                            <h4 style={{ color: "#840000", fontSize: "1.6rem", fontWeight: "600", marginBottom: "20px" }}>
                                                Open Die Forging Facility
                                            </h4>
                                            <div className="FacilityTables">
                                                <div className="FacilityTable" style={{ marginBottom: "20px" }}>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Hammer 1</th>
                                                                <th>Capacity</th>
                                                                <th>Maximum Stroke Height</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Steam Hammer</td>
                                                                <td>10 Ton</td>
                                                                <td>2000 mm</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="FacilityTable" style={{ marginBottom: "20px" }}>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Hammer 2</th>
                                                                <th>Capacity</th>
                                                                <th>Maximum Stroke Height</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Pneumatic</td>
                                                                <td>0.5 Ton</td>
                                                                <td>500 mm</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="FacilityTable">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Ring Rolling Machine</th>
                                                                <th>Capacity</th>
                                                                <th>Slide Stroke</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Rolling Process</td>
                                                                <td>1000mm OD</td>
                                                                <td>350 mm</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* Process Gallery */}
                            <div className="ProcessGallery" data-aos="blur-to-clear" data-aos-delay="500" data-aos-duration="1000">
                                <Row gutter={[24, 24]} justify="center">
                                    <Col lg={8} md={8} sm={12} xs={24}>
                                        <div className="ProcessImageCard">
                                            <Image
                                                src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image4.png"
                                                alt="Forging Process 1"
                                                loading="lazy"
                                                style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "12px" }}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={8} md={8} sm={12} xs={24}>
                                        <div className="ProcessImageCard">
                                            <Image
                                                src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image5.png"
                                                alt="Forging Process 2"
                                                loading="lazy"
                                                style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "12px" }}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={8} md={8} sm={12} xs={24}>
                                        <div className="ProcessImageCard">
                                            <Image
                                                src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image1.png"
                                                alt="Forging Process 3"
                                                loading="lazy"
                                                style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "12px" }}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                    {/* Heat Treatment Section */}
                    <div className="HeatTreatmentLayout">
                        <div className="containerGap">
                            <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1000">HEAT TREATMENT</h2>
                        </div>

                        {/* Heat Treatment Introduction */}
                        <div className="HeatTreatmentIntroSection" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1000">
                            <Row gutter={[40, 40]} align="middle" style={{ alignItems: "unset" }}>
                                <Col lg={10} md={12} sm={24} xs={24}>
                                    <div className="HeatTreatmentHeroImage">
                                        <Image
                                            src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image9.png"
                                            alt="Heat Treatment Process"
                                            loading="lazy"
                                            style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "16px" }}
                                        />
                                    </div>
                                </Col>
                                <Col lg={14} md={12} sm={24} xs={24}>
                                    <div className="HeatTreatmentIntroContent">
                                        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#666", marginBottom: "25px" }}>
                                            Bhawal Metal Industries also offers heat treatment facilities to ensure the exceptional performance of our products in high-pressure and safety-critical applications. The heat treatment imparts our products with minimized internal stresses, grain-structure refinement, and improved mechanical and physical properties.
                                        </p>
                                        <h4 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#617E87", marginBottom: "20px" }}>
                                            We offer the following services with our product:-
                                        </h4>
                                        <div className="HeatTreatmentServicesList">
                                            <div className="HeatTreatmentServiceItem">
                                                <span className="ServiceIcon">•</span>
                                                <span>Normalizing</span>
                                            </div>
                                            <div className="HeatTreatmentServiceItem">
                                                <span className="ServiceIcon">•</span>
                                                <span>Iso-annealing</span>
                                            </div>
                                            <div className="HeatTreatmentServiceItem">
                                                <span className="ServiceIcon">•</span>
                                                <span>Spheroidize annealing</span>
                                            </div>
                                            <div className="HeatTreatmentServiceItem">
                                                <span className="ServiceIcon">•</span>
                                                <span>Hardening and tempering</span>
                                            </div>
                                            <div className="HeatTreatmentServiceItem">
                                                <span className="ServiceIcon">•</span>
                                                <span>Quenching (oil /water) and tempering</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        {/* Heat Treatment Facility */}
                        <div className="HeatTreatmentFacilitySection">
                            <div className="HeatTreatmentFacilityCard" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="800">
                                <Row gutter={[32, 32]} align="middle" style={{ alignItems: "unset" }}>
                                    <Col lg={10} md={10} sm={24} xs={24}>
                                        <div className="HeatTreatmentFacilityImage">
                                            <Image
                                                src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/image 8.png"
                                                alt="Heat Treatment Facility"
                                                loading="lazy"
                                                style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "12px" }}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={14} md={14} sm={24} xs={24}>
                                        <div className="HeatTreatmentFacilityContent">
                                            <h4 style={{ color: "#840000", fontSize: "1.6rem", fontWeight: "600", marginBottom: "20px" }}>
                                                Heat Treatment Facility
                                            </h4>
                                            <div className="HeatTreatmentFacilityTables">
                                                <div className="HeatTreatmentFacilityTable" style={{ marginBottom: "20px" }}>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Electrical Bogie Type Furnace</th>
                                                                <th>Capacity</th>
                                                                <th>Dimension</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>No. of Furnace</td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>10 Ton</td>
                                                                <td>1m x 1m x 6m</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1 Ton</td>
                                                                <td>1m x 1m x 1m</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="HeatTreatmentFacilityTable" style={{ marginBottom: "20px" }}>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Oil Quenching Tank</th>
                                                                <th>Capacity</th>
                                                                <th>Dimension</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>10 ton</td>
                                                                <td>1m x 1m x 6m</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="HeatTreatmentFacilityTable">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Water Quenching Tank</th>
                                                                <th>Capacity</th>
                                                                <th>Dimension</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>10 ton</td>
                                                                <td>1m x 1m x 6m</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="PRECISIONMACHINEFACILITY " style={{ paddingTop: "0px" }}>
                <div className="contentInfoContainer" style={{ paddingBottom: "0px" }}>
                    <div>
                        <div className="containerGap">
                            <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1000">PRECISION MACHINE FACILITY </h2>
                        </div>
                    </div>
                    <div>
                        <p data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="800">Bhawal Metal Industries provides top-quality outsourced machining facilities for various product lines, enabling us to supply products in either pre-machined or fully machined conditions with exceptional precision. Our unwavering focus on quality and timely delivery ensures we meet customer demands efficiently.</p>
                        <br />
                        <p data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="800">We have dedicated machining setups and outsourcing capabilities to offer the following services to our clients:</p>
                    </div>
                    <br />
                    <div>
                        <Row>
                            {GalleryImages.map((item, index) => (
                                <Col lg={8} md={12} style={{ width: "100%", height: "100%" }}>
                                    <div>
                                        <div className="GalleryImageContainer" data-aos="blur-to-clear"
                                            data-aos-duration="800"
                                            data-aos-delay={400 + index * 200} >
                                            <Image src={item.img} alt="" loading="lazy" />
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>

            </section>

            <section id="MachinerySection">
                <div className="MachineryContainer contentInfoContainer">
                    <div className="containerGap" style={{marginTop:"0px"}}>
                        <h2 className="BigHeading " data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1000">
                            Machineries
                        </h2>
                        <p data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="800" >
                            BHAWAL METAL INDUSTRIES has complete machining capabilities with our state-of-the-art machines at the core of our infrastructure.
                        </p>
                    </div>

                    <div className="MachineryGrid" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1000">
                        <Row gutter={[40, 40]} justify="center">
                            {/* Column 1 */}
                            <Col lg={8} md={12} sm={24} xs={24}>
                                <div className="MachineryColumn">
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                                <path d="M12 1v6m0 8v6m11-7h-6m-8 0H1" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <span>CNC Turning Centre</span>
                                    </div>
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="12" cy="12" r="2" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <span>Centereless Grinding</span>
                                    </div>
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="8" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="16" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <span>Cylindrycal Grinding</span>
                                    </div>
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                                                <path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="12" cy="12" r="2" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <span>Milling Machineries</span>
                                    </div>
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" />
                                                <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <span>Ultrasonic Cleaning</span>
                                    </div>
                                </div>
                            </Col>

                            {/* Column 2 */}
                            <Col lg={8} md={12} sm={24} xs={24}>
                                <div className="MachineryColumn">
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="3" y="8" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
                                                <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" />
                                                <line x1="12" y1="12" x2="12" y2="12" stroke="currentColor" strokeWidth="3" />
                                            </svg>
                                        </div>
                                        <span>Vertical Machining Centre</span>
                                    </div>
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                                                <path d="M12 4v8l4 4" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <span>buffing machine</span>
                                    </div>
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M4 12h16" stroke="currentColor" strokeWidth="2" />
                                                <path d="M4 6h16" stroke="currentColor" strokeWidth="2" />
                                                <path d="M4 18h16" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <span>Lathe</span>
                                    </div>
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="currentColor" strokeWidth="2" />
                                                <polygon points="12,8 18,12 12,16 6,12" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <span>Shaper</span>
                                    </div>
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
                                                <path d="M3 6h18" stroke="currentColor" strokeWidth="2" />
                                                <path d="M3 18h18" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="6" cy="12" r="1" fill="currentColor" />
                                                <circle cx="12" cy="12" r="1" fill="currentColor" />
                                                <circle cx="18" cy="12" r="1" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <span>Thread Rolling</span>
                                    </div>
                                </div>
                            </Col>

                            {/* Column 3 */}
                            <Col lg={8} md={12} sm={24} xs={24}>
                                <div className="MachineryColumn">
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                                                <path d="M9 8h6v2H9z" fill="currentColor" />
                                                <path d="M9 12h6v2H9z" fill="currentColor" />
                                                <path d="M9 16h4v2H9z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <span>Typping Machine</span>
                                    </div>
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                                <path d="M8 12h8" stroke="currentColor" strokeWidth="2" />
                                                <path d="M12 8v8" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <span>Traub/Single spindle automats</span>
                                    </div>
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="12" cy="8" r="1" fill="currentColor" />
                                                <circle cx="12" cy="16" r="1" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <span>Honing Machine</span>
                                    </div>
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                                <path d="M12 4v4" stroke="currentColor" strokeWidth="2" />
                                                <path d="M12 16v4" stroke="currentColor" strokeWidth="2" />
                                                <path d="M4.93 4.93l2.83 2.83" stroke="currentColor" strokeWidth="2" />
                                                <path d="M16.24 16.24l2.83 2.83" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <span>Drillings Machine</span>
                                    </div>
                                    <div className="MachineryItem">
                                        <div className="MachineryIcon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 3h12l2 6-10 12L0 9l6-6z" stroke="currentColor" strokeWidth="2" />
                                                <path d="M12 8v4" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <span>Bandsaw</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* Decorative SVG Background Elements */}
                    {/* <div className="MachineryDecorations">
                        <div className="DecorationShape shape1">
                            <svg width="100" height="100" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#617E87" strokeWidth="2" opacity="0.3"/>
                                <circle cx="50" cy="50" r="30" fill="none" stroke="#617E87" strokeWidth="1" opacity="0.2"/>
                            </svg>
                        </div>
                        <div className="DecorationShape shape2">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect x="10" y="10" width="60" height="60" fill="none" stroke="#840000" strokeWidth="2" opacity="0.3" rx="10"/>
                                <rect x="20" y="20" width="40" height="40" fill="none" stroke="#840000" strokeWidth="1" opacity="0.2" rx="5"/>
                            </svg>
                        </div>
                        <div className="DecorationShape shape3">
                            <svg width="60" height="60" viewBox="0 0 60 60">
                                <polygon points="30,5 55,45 5,45" fill="none" stroke="#617E87" strokeWidth="2" opacity="0.3"/>
                            </svg>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* Measuring Instruments & Software Section */}
            <section id="MeasuringInstrumentsSection">
                <div className="MeasuringInstrumentsContainer contentInfoContainer">
                    <div className="containerGap" style={{marginTop:"0px"}}>
                        <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1000">
                            Measuring Instruments & Software
                        </h2>
                        <p className="textCenter" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="800" >
                            Our precision manufacturing is backed by state-of-the-art measuring instruments and advanced software solutions, ensuring exceptional quality control and dimensional accuracy.
                        </p>
                    </div>

                    <div className="MeasuringInstrumentsLayout" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1000">
                        <Row gutter={[60, 60]} align="top">
                            {/* Main Measuring Instruments */}
                            <Col lg={12} md={24} sm={24} xs={24}>
                                <div className="InstrumentsCard">
                                    <div className="InstrumentsHeader">
                                        <div className="InstrumentsIcon">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                                <rect x="3" y="4" width="18" height="12" rx="2" stroke="#617E87" strokeWidth="2"/>
                                                <path d="M7 8h10" stroke="#617E87" strokeWidth="2"/>
                                                <path d="M7 12h6" stroke="#617E87" strokeWidth="2"/>
                                                <circle cx="18" cy="18" r="3" stroke="#840000" strokeWidth="2"/>
                                                <path d="M16.5 16.5l3 3" stroke="#840000" strokeWidth="2"/>
                                            </svg>
                                        </div>
                                        <h3 style={{ color: "#617E87", fontSize: "1.8rem", fontWeight: "600"}}>
                                            Main Measuring Instrument
                                        </h3>
                                    </div>
                                    
                                    <div className="InstrumentsList">
                                        <div className="InstrumentItem">
                                            <span className="InstrumentBullet">•</span>
                                            <span><strong>CMM - ZEISS SPECTRUM:</strong> 700x1000x600</span>
                                        </div>
                                        <div className="InstrumentItem">
                                            <span className="InstrumentBullet">•</span>
                                            <span><strong>Height Gauge:</strong> 0-600 mm Range</span>
                                        </div>
                                        <div className="InstrumentItem">
                                            <span className="InstrumentBullet">•</span>
                                            <span><strong>Digital Vernier:</strong> 0-300 mm</span>
                                        </div>
                                        <div className="InstrumentItem">
                                            <span className="InstrumentBullet">•</span>
                                            <span><strong>Vernier Caliper:</strong> 0-600 mm</span>
                                        </div>
                                        <div className="InstrumentItem">
                                            <span className="InstrumentBullet">•</span>
                                            <span><strong>Micrometer(yuri):</strong> 400-500 mm</span>
                                        </div>
                                        <div className="InstrumentItem">
                                            <span className="InstrumentBullet">•</span>
                                            <span><strong>Bore Gauge(mitutoyo):</strong> 50-150 mm range</span>
                                        </div>
                                        <div className="InstrumentItem">
                                            <span className="InstrumentBullet">•</span>
                                            <span><strong>Slip Gauge set (precise):</strong> 0.5-100 mm</span>
                                        </div>
                                        <div className="InstrumentItem">
                                            <span className="InstrumentBullet">•</span>
                                            <span><strong>Vision Measuring System</strong></span>
                                        </div>
                                        <div className="InstrumentItem">
                                            <span className="InstrumentBullet">•</span>
                                            <span><strong>Plug Guages</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            {/* Software & Hardware */}
                            <Col lg={12} md={24} sm={24} xs={24}>
                                <div className="SoftwareCard">
                                    <div className="SoftwareHeader">
                                        <div className="SoftwareIcon">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                                <rect x="4" y="3" width="16" height="14" rx="2" stroke="#840000" strokeWidth="2"/>
                                                <path d="M8 21h8" stroke="#840000" strokeWidth="2"/>
                                                <path d="M12 17v4" stroke="#840000" strokeWidth="2"/>
                                                <path d="M8 7h8" stroke="#617E87" strokeWidth="2"/>
                                                <path d="M8 11h5" stroke="#617E87" strokeWidth="2"/>
                                            </svg>
                                        </div>
                                        <h3 style={{ color: "#840000", fontSize: "1.8rem", fontWeight: "600"}}>
                                            Software & Hardware
                                        </h3>
                                    </div>
                                    
                                    <div className="SoftwareList">
                                        <div className="SoftwareItem">
                                            <span className="SoftwareBullet">•</span>
                                            <span><strong>SolidWorks Inspection Professional 2020</strong></span>
                                        </div>
                                        <div className="SoftwareItem">
                                            <span className="SoftwareBullet">•</span>
                                            <span><strong>CAD Software - Solid Edge</strong></span>
                                        </div>
                                        <div className="SoftwareItem">
                                            <span className="SoftwareBullet">•</span>
                                            <span><strong>CAM Software - Unigraphics NX 8.5</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* Machinery Specifications Table */}
                    <div className="MachinerySpecificationsSection" data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1000">
                        <div className="containerGap">
                            <h3 className="BigHeading textCenter" style={{ color: "#617E87", marginBottom: "40px" }}>
                                Conventional Horizontal Lathe Machine
                            </h3>
                        </div>
                        
                        <div className="SpecificationsTableContainer">
                            <div className="SpecificationTable">
                                <table className="MachineryTable CombinedTable">
                                    <thead>
                                        <tr>
                                            <th>Machine name</th>
                                            <th>Max Length</th>
                                            <th>Max Dia</th>
                                            <th>No. of furnace</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Horizontal Lathe machine</td>
                                            <td>500 to 6000 mm</td>
                                            <td>200 to 500 mm</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>Vertical Turning Lathe Machine</td>
                                            <td>500mm</td>
                                            <td>1200mm</td>
                                            <td>1</td>
                                        </tr>
                                        
                                        {/* Section Headers */}
                                        <tr className="SectionHeader">
                                            <td></td>
                                            <td><strong>Machine 2</strong></td>
                                            <td><strong>Machine 1</strong></td>
                                            <td><strong>Machine 3</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Cutting Machines</td>
                                            <td>850 mm</td>
                                            <td>770 mm</td>
                                            <td>220 mm</td>
                                        </tr>
                                        
                                        <tr className="SectionHeader">
                                            <td></td>
                                            <td><strong>Y-axis</strong></td>
                                            <td><strong>X-axis</strong></td>
                                            <td><strong>Z-axis</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Vertical Machining Centre</td>
                                            <td>440mm</td>
                                            <td>800mm</td>
                                            <td>490mm</td>
                                        </tr>
                                        
                                        <tr className="SectionHeader">
                                            <td></td>
                                            <td><strong>Max Turning Dia</strong></td>
                                            <td><strong>Chuck Dia</strong></td>
                                            <td><strong>Max Turning Length</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Horizontal CNC 1</td>
                                            <td>320 mm</td>
                                            <td>210 mm</td>
                                            <td>690 mm</td>
                                        </tr>
                                        <tr>
                                            <td>Horizontal CNC 2</td>
                                            <td>470 mm</td>
                                            <td>300 mm</td>
                                            <td>1200 mm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testing & Inspection Section */}
            <section id="TestingInspectionSection" style={{paddingTop:"0px"}}>
                <div className="TestingInspectionContainer contentInfoContainer">
                    <div className="containerGap" style={{marginTop:"0px"}}>
                        <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1000">
                     Testing & Inspection
                        </h2>
                    </div>

                    {/* Testing Description */}
                    <div className="TestingDescription" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="800">
                        <p>
                            To maintain its high-quality standards, Bhawal Metal uses state-of-art laboratories that offer metallurgical and metrological 
                            testing capabilities for raw material, in-process, and finished components. We have a dedicated team of experienced professionals 
                            who have the latest know-how of the latest technologies and the best practices to provide our customers with quality products 
                            and after-sales service.
                        </p>
                        <br />
                        <p>
                            We provide material with manufacturing testing certificates and also facilitate different types of tests by a NABL Approved lab.:
                        </p>
                    </div>

                    {/* Testing Image */}
                    {/* <div className="TestingImageSection" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1000">
                        <div className="TestingImageContainer">
                            <div className="TestingImage">
                                <Image
                                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Testing.png"
                                    alt="Testing & Inspection Equipment"
                                    loading="lazy"
                                    style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "20px" }}
                                />
                            </div>
                        </div>
                    </div> */}

                    {/* Testing Capabilities Grid */}
                    <div className="TestingCapabilities" data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1000">
                        <div className="TestingGrid">
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>Ultrasonic Testing (UT)</span>
                            </div>
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>Mechanical Properties Testing</span>
                            </div>
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>Physical Testing (acid pickling, internal soundness, inclusion, micro-testing, grain size)</span>
                            </div>
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>Chemical Composition Testing</span>
                            </div>
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>NACE Hardness Test</span>
                            </div>
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>Grain flow Testing</span>
                            </div>
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>Intergranular Corrosion (IGC) Test - Practice E & Practice A</span>
                            </div>
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>Non-Destructive testing (NDT-ASTM A 388)</span>
                            </div>
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>Dye Penetrant Inspection (DP)</span>
                            </div>
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>Radiography</span>
                            </div>
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>Visual Testing</span>
                            </div>
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>SPECTRO Analysis</span>
                            </div>
                            <div className="TestingItem">
                                <div className="TestingBullet">•</div>
                                <span>Solution Annealing Graph.</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Logistics Section */}
            <section id="LogisticsSection" style={{paddingTop:"0px"}}>
                <div className="LogisticsContainer contentInfoContainer">
                    <div className="containerGap" style={{marginTop:"0px"}}>
                        <h2 className="BigHeading textCenter" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1000">
                             Logistics
                        </h2>
                    </div>

                    <div className="LogisticsLayout" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1000">
                        <Row gutter={[50, 50]} align="top" style={{alignItems:"unset"}}>
                            {/* Logistics Image */}
                            <Col lg={12} md={24} sm={24} xs={24}>
                                <div className="LogisticsImageContainer" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1000">
                                    <div className="LogisticsImage">
                                        <Image
                                            src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Logistics.png"
                                            alt="Logistics & Transportation"
                                            loading="lazy"
                                            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "20px" }}
                                        />
                                    </div>
                                </div>
                            </Col>

                            {/* Logistics Content */}
                            <Col lg={12} md={24} sm={24} xs={24}>
                                <div className="LogisticsContent" data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1000">
                                    <div className="LogisticsDescription">
                                        <p>
                                            Bhawal Metal has always been at the top in customer satisfaction regardless of geographical position. We strive to deliver products and 
                                            services within the agreed lead times, ensuring that our customers receive the best quality as well as outstanding service. Freight 
                                            transportation, warehousing, and distribution – we do it all to delight our customers.
                                        </p>
                                        <br />
                                        <p>
                                            We focus on providing the following value-added services to our customers like-
                                        </p>
                                    </div>

                                    <div className="LogisticsServices" data-aos="blur-to-clear" data-aos-delay="500" data-aos-duration="1000">
                                        <div className="LogisticsServicesList">
                                            <div className="LogisticsServiceItem">
                                                <div className="ServiceBullet">•</div>
                                                <span>All India delivery regardless of geographical position.</span>
                                            </div>
                                            <div className="LogisticsServiceItem">
                                                <div className="ServiceBullet">•</div>
                                                <span>Just-in-time delivery</span>
                                            </div>
                                            <div className="LogisticsServiceItem">
                                                <div className="ServiceBullet">•</div>
                                                <span>Warehousing solution and smart material handling.</span>
                                            </div>
                                            <div className="LogisticsServiceItem">
                                                <div className="ServiceBullet">•</div>
                                                <span>Early engagement with customers for new development.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* Logistics Features Section */}
                    
                </div>
            </section>
        </>
    )
}
export default FacilitiesAndServices
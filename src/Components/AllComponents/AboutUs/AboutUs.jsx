import React from "react";
import "./AboutUs.css"
import { Row, Col } from "antd";
import AboutUsImage from "./AboutUsImage.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import UnwaveringEfforts from "../UnwaveringEfforts/UnwaveringEfforts";
const AboutUs = () => {
    return (
        <>

            <div className="TopBannerContainerCommon">
                <div className="CommonTopContainer">
                    <div className="ImageBackContainerWithContent">
                        <div className="overlayContainer">

                        </div>
                        <img src="/Images/AboutUsBanner.jpg" alt="" />
                    </div>
                    <div className="ContentContainerTopheader">
                        <div>
                            <h2 className="BigHeading" style={{ margin: "0px" }}>About Us</h2>
                            <p>BHAWAL METAL INDUSTRIES</p>
                        </div>
                    </div>
                </div>
            </div>
            <section id="AboutUsContainer">

                <div className="contentInfoContainer">
                    <Row>
                        <Col lg={24}>
                            <div className="AboutUsContentContainer">
                                <div >
                                    <h2 className="BigHeading ">About Bhawal Metal Industries </h2>
                                    <br />
                                    <p><b>Bhawal Metal Industries</b> was established in the year 1996 with the aim of catering to the growing demands of Stainless Steel. <b>Bhawal Metal Industries</b> is a leading supplier and manufacturer of High Quality Stainless Steel Round Bars, Forged components, Drawing Based Components And Precision components. </p>
                                    <br />
                                    <p>We have a team of young visionaries who endeavor for excellence in every aspect related to metals. We strongly believe in our core values and are always in the pursuit of success along the lines of ethical business practices. Keeping in mind its customer centric approach, timely delivery and quality products, the Company has grown in size and products range. </p>
                                    <br />
                                    <p>Over the decades <b>Bhawal Metal Industries</b> has carved an unparallel position for itself in the steel industry of India and has built various congenial customer relations. Now with the new generation of entrepreneurs joining the company, the company aims at expanding on a global scale with the domestic supply and export of Stainless Steel long Products, Forged components, Drawing Based Components And Precision components.</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={24}>
                            <div>
                                <br />
                                <div className="AboutUsImageContainer">
                                    <img src="https://images.unsplash.com/photo-1531053326607-9d349096d887?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading="lazy" />
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
                <section id="WhatDoesBhawalContainer" style={{ marginBottom: "0px", paddingBottom: "0px" }}>
                    <div>
                        <div>
                            <h2 className="BigHeading textCenter" >What Does Bhawal Metal Do?</h2>
                            <p className="textCenter">Bhawal Metal Industries working is divided in 3 major segments</p>
                        </div>
                    </div>
                    <div className="containerGap">
                        <Row>
                            <Col lg={12} md={24}>
                                <div className="WhatDoesBhawalImageContainer">
                                    <div>
                                        <img src="/Images/WhatDoesBhawalImage.png" alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={24}>
                                <div>
                                    <div>
                                        <p>Bhawal Metal Industries is one of the first fully forward integrated Contract manufacturing Company Based in India. </p>
                                        <br />
                                        <p>We help our clients by fulfilling their manufacturing needs before the process even begins by serving them with High Quality Raw Materials in form of Stainless Steel Round bars, Flat Bars, Hex Bars, Square Bars etc. We conduct tests for Chemical, Physical, Mechanical, Ultrasonic, Micro, IGC, and any other aspects from Govt. & Internationally approved certification bodies to ensure that our client receives only the best in class products.</p>
                                        <br />
                                        <p>We Don't just stop at Stainless Steel Long products, We also provide our clients with our supreme quality Forged Components too, With the best in Class Forging unit we are able to provide our Clients with Forged Circle, Forged Rings, Forged Blocks, forged Flat Bars, Forged flanges and We are also able to provide forged Components in complex shapes using Die Forging Method.  </p>
                                        <br />
                                        <p>Our Precision Machining unit not only help our clients to reduce their overall machining time it also saves a significant cost as now company has to invest less on labor and transportation and wont have to deal with rejections because we at Bhawal Metal Industries understand the Importance of Quality material as it is a key to delivers a durable and high-performing Finished Product.</p>
                                        <br />
                                        <p>To Achieve this we ensure that a strict quality check is maintained over all the phases of manufacturing. This has enabled us to Serve our clients better and also provided us with competitive edge in the market. As the Quality Raw material is the Key For Quality End Products. </p>
                                        <div>
                                            <div className="AnimatedbtnContainer">
                                                <button className="ColourButton">View All Products <MdKeyboardArrowRight /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </section>
            <UnwaveringEfforts />
        </>
    )
}
export default AboutUs
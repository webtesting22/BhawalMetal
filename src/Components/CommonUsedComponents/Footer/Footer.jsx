import React from "react";
import { Row, Col } from "antd";
import "./Footer.css"
import { Link } from "react-router-dom";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";


const Footer = () => {
    return (
        <>
            <div>
                <section style={{ paddingBottom: "00px", paddingTop: "2rem" }}>
                    <div>
                        <div>
                            <Row>
                                <Col lg={8} style={{ width: "100%" }} data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1200">
                                    <div className="FooterlogoContainer">
                                        <div>
                                            <div>
                                                <img src="/Images/BhawalLogo.png" alt="" loading="lazy" className="FooterLogoContainer" />
                                                <p><b style={{ fontWeight: "500" }}>Bhawal Metal Industries</b></p>
                                                <i>Forging excellence, shaping the future—one stainless steel innovation at a time.</i>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8} style={{ width: "100%" }} data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1200">
                                    <div className="EmailBoxContainer">
                                        <div style={{ width: "100%" }}>
                                            <div>
                                                <h2>Contact</h2>
                                                <br />
                                                <div className="ContactNumbers">
                                                    <p><a href="tel:+91 93270 18703"><MdOutlinePhoneInTalk /> &nbsp;+91 93270 18703</a></p>
                                                    <p><a href="tel:+91 76007 29708"><MdOutlinePhoneInTalk /> &nbsp;+91 76007 29708</a></p>
                                                    <p> <a href="tel:+91 92272 18702"><MdOutlinePhoneInTalk /> &nbsp;+91 92272 18702</a></p>
                                                </div>
                                                <hr />
                                                <p><a href="mailto:sales1@bhawalmetal.com"><TfiEmail />&nbsp; sales1@bhawalmetal.com</a></p>
                                                <p><a href="mailto:bhawalmetalindustries@gmail.com"><TfiEmail />&nbsp; bhawalmetalindustries@gmail.com</a></p>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8} style={{ width: "100%" }} data-aos="blur-to-clear" data-aos-delay="500" data-aos-duration="1200">
                                    <div className="PhoneBoxContainer">
                                        <div>
                                            <div>
                                                <h2>Address</h2>
                                                <br />
                                                <p><b style={{ fontWeight: "500" }}><IoLocationOutline style={{ marginBottom: "-3px" }} />&nbsp;Ahmedabad Office</b>
                                                    &nbsp;21, Jay Jayant Estate, Kewal Kanta, Rakhial, Rakhial, Ahmedabad, Gujarat 380023</p>
                                                {/* <br /> */}
                                                <hr />
                                                <p><b style={{ fontWeight: "500" }}><IoLocationOutline style={{ marginBottom: "-3px" }} />&nbsp;Mumbai Office </b>
                                                    21, 2nd Carpenter St, Charni Road East, Cawasji Patel Tank, Bhuleshwar, Mumbai, Maharashtra 400004</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {/* <hr />
                        <div className="CopyWriteTextContainer">
                            <p>Designed By
                                <Link to="https://www.outleadsolutions.com/" target="_blank" style={{ color: "black" }}><b style={{ fontWeight: "500" }}> OutLead Solutions</b></Link></p>
                        </div>
                        <br /> */}
                    </div>
                </section>
            </div>
            {/* <br /><br /> */}
        </>
    )
}
export default Footer
import React from "react";
import { Row, Col } from "antd";
import "./Footer.css"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div>
                <section style={{ paddingBottom: "00px", }}>
                    <div>
                        <div>
                            <Row>
                                <Col lg={8}>
                                    <div className="FooterlogoContainer">
                                        <div>
                                            <div>
                                                <img src="/Images/BhawalLogo.png" alt="" className="FooterLogoContainer" />
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, hic.</p>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="EmailBoxContainer">
                                        <div style={{ width: "100%" }}>
                                            <div>
                                                <h2>Contact</h2>
                                                <br />
                                                <p><a href="tel:+91 93270 18703">+91 93270 18703</a></p>
                                                <p> <a href="tel:+91 76007 29708">+91 76007 29708</a></p>
                                                <p> <a href="tel:+91 92272 18702">+91 92272 18702</a></p>
                                                <hr />
                                                <p><a href="mailto:sales1@bhawalmetal.com">sales1@bhawalmetal.com</a></p>
                                                <p><a href="mailto:bhawalmetalindustries@gmail.com">bhawalmetalindustries@gmail.com</a></p>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="PhoneBoxContainer">
                                        <div>
                                            <div>
                                                <h2>Address</h2>
                                                <br />
                                                <p><b style={{ fontWeight: "500" }}>Ahmedabad Office</b>
                                                    &nbsp;21, Jay Jayant Estate, Kewal Kanta, Rakhial, Rakhial, Ahmedabad, Gujarat 380023</p>
                                                {/* <br /> */}
                                                <hr />
                                                <p><b style={{ fontWeight: "500" }}>Mumbai Office </b>
                                                    21, 2nd Carpenter St, Charni Road East, Cawasji Patel Tank, Bhuleshwar, Mumbai, Maharashtra 400004</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <hr />
                        <div className="CopyWriteTextContainer">
                            <p>Designed By
                            <Link to="https://www.outleadsolutions.com/" target="_blank" style={{color:"black"}}><b style={{fontWeight:"500"}}> Outlead Solutions</b></Link></p>
                        </div>
                        <br />
                    </div>
                </section>
            </div>
            {/* <br /><br /> */}
        </>
    )
}
export default Footer
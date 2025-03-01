import React from "react";
import "./MetalGrades.css"
import { Row, Col,Image } from "antd";

const MetalGrades = () => {
    return (
        <>
            <div className="TopBannerContainerCommon">
                <div className="CommonTopContainer">
                    <div className="ImageBackContainerWithContent">
                        <div className="overlayContainer">

                        </div>
                        <img src="/Images/MaterialGrades.jpg" alt="" />
                    </div>
                    <div className="ContentContainerTopheader">
                        <div>
                            <h2 className="BigHeading" style={{ margin: "0px" }}>Material Grades </h2>
                            <p>BHAWAL METAL INDUSTRIES</p>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div id="MetalgradesContainer" className="contentInfoContainer">
                    <div>
                        <p>At Bhawal Metal Industries, We have kept our niche strictly to Stainless Steel and with time we are parallelly Integrating our Products in the Stainless Steel materials as per the market needs and our clients requirements, Adding more Grades in our basket. For Now the Company's dealing in Materials could be Divided in Three Segments -  </p>
                    </div>
                    <div>
                        <div className="containerGap">
                            <h2 className="BigHeading textCenter">Austenitic Steel </h2>
                        </div>
                        <div>
                            <Row>

                                <Col lg={12}>
                                    <div className="AboutUsContentContainer">
                                        <div>
                                            <p><b>Austenitic steels</b> are non-magnetic stainless steels that contain a high level of chromium & nickel with a low level of carbon content. Austenitic steels are the most widely used grade of stainless steel; the most common composition is 18% Cr and 8% Ni i.e. 18/8-steels.</p>
                                            <br />
                                            <p>Austenitic steels are generally classified into two groups –the Chromium-Nickel AISI 300 series type and Chromium-Nickel- Manganese 200 series type. Steel with better resistance to corrosion is created by adding 2-3% molybdenum, which is often called “acid-proof steel”. Grade 304 is the most common grade of this type, which typically contains 18 percent chromium and 8 percent nickel.</p>
                                            <br />
                                            <p>Bhawal Metal Industries works with all materials in this grade – Bright Round Bars, PSQ Bars, Flat Bars, HR Bars & RCS, Cold Drawn Round/Flat/Square/Hexagon Bars, Forged Components and Precision Component</p>

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} style={{width:"100%"}}>
                                    <div>
                                        <div className="AboutUsImageContainer">
                                            <img src="/Images/RoundsBarImage.png" alt="" loading="lazy" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <div className="containerGap">
                            <h2 className="BigHeading textCenter">Chemical Properties of Austenitic Steel</h2>
                        </div>
                        <div className="GraphImage">
                            <Image src="/Images/ChemicalPropertiesofAusteniticSteel.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="containerGap">
                            <h2 className="BigHeading textCenter">Mechanical Properties of Austenitic Steel</h2>
                        </div>
                        <div className="GraphImage">
                            <Image src="/Images/MechanicalPropertiesofAusteniticSteel.png" alt="" />
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}
export default MetalGrades
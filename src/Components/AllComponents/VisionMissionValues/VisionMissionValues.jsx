import React from "react";
import "./MissionVisionContainer.css"
import { Row, Col } from "antd";
const VisionMissionValues = () => {


    const VisionMissionContent = [
        {
            image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/fKJw3sY6Kuptl4eMjMMT/AboutUsVision.jpg",
            title: "Our Vision ",
            content: <>
                <div>
                    <ul>
                        <li>To recognize our company’s and our people's full potential, establishing ourselves as a leading global Precision Engineering Firm</li>
                        <li> ⁠To be India’s driving force in the world of automation and robotics through innovation and persistence.</li>
                        <li>To inspire and positively impact millions of lives by uplifting society and making mindful efforts for the well-being of the planet and its people.</li>
                    </ul>
                </div>
            </>
        },
        {
            image: "/Images/OurMission.jpeg",
            title: "Our Mission",
            content: <>
                <div>
                    <ul>
                        <li>To support our customers by delivering superior products and services of exceptional value, helping them gain a competitive advantage in their markets.</li>
                        <li>To sustain our vision by continuously improving processes, adopting new technologies, and implementing best business practices. </li>
                        <li>To provide a positive, nurturing, and growth-oriented work environment that encourages employees to be highly productive and grow both personally and professionally.</li>
                    </ul>
                </div>
            </>
        },
        {
            image: "/Images/OurCoreValues.jpg",
            title: "Our Core Values",
            content: <>
                <div>
                   

                    <ul>
                        <li><b>At Bhawal Metal Industries, we strongly believe in:</b></li>
                        <li><b>Excellence</b> – Striving for the highest quality in everything we do.</li>
                        <li><b>Integrity</b> – Conducting business with honesty and strong moral principles.</li>
                        <li><b>Transparency</b> – Maintaining open and clear communication in all dealings. </li>
                        <li><b>Innovation</b> – Continuously improving and adopting new ideas and technologies. </li>
                        <li><b>Customer Service</b> – Prioritizing customer satisfaction through quality products and support.</li>
                        <li><b>Accountability</b> – Taking responsibility for our actions and commitments.</li>
                    </ul>
                </div>

            </>
        },

    ]
    return (
        <>
            <div id="MissionVisionContainer">
                <div className="backGroundColor">
                    <div className="LinesContainer">

                    </div>
                    <div className="LinesContainer">

                    </div>
                    <div className="LinesContainer">

                    </div>
                    <div className="LinesContainer">

                    </div>
                    <div className="LinesContainer">

                    </div>
                </div>
                <div>
                    <div className="interChangeRowAdjust">
                        {VisionMissionContent.map((item, index) => (
                            <Row key={index} align="middle" className="containerGap"  >
                                {/* If index is even, display Image first, otherwise display Content first */}
                                {index % 2 === 0 ? (
                                    <>
                                        <Col lg={12} xs={24} data-aos="fade-right"
                                            data-aos-duration="1000">
                                            <div className="VisionMissionContainerImage">
                                                <img src={item.image} alt={item.title} loading="lazy"/>
                                            </div>
                                        </Col>
                                        <Col lg={12} xs={24} data-aos="fade-left"
                                            data-aos-duration="1000">
                                            <div>
                                                <h2 className="BigHeading">{item.title}</h2>
                                                {item.content}
                                            </div>
                                        </Col>
                                    </>
                                ) : (
                                    <>
                                        <Col lg={12} xs={24} data-aos="fade-right"
                                            data-aos-duration="1000">
                                            <div>
                                                <h2 className="BigHeading">{item.title}</h2>
                                                {item.content}
                                            </div>
                                        </Col>
                                        <Col lg={12} xs={24} data-aos="fade-left"
                                            data-aos-duration="1000">
                                            <div className="VisionMissionContainerImage" style={{ paddingRight: "0px" }}>
                                                <img src={item.image} alt={item.title} loading="lazy"/>
                                            </div>
                                        </Col>
                                    </>
                                )}
                            </Row>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default VisionMissionValues
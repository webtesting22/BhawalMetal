import React from "react";
import "./MissionVisionContainer.css"
import { Row, Col } from "antd";
const VisionMissionValues = () => {


    const VisionMissionContent = [
        {
            image: "https://images.unsplash.com/photo-1686223679665-242fe8521ade?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Vision ",
            content: <>
                <div>
                    <ul>
                        <li>To recognize our company’s and its people full potential to carve our name as world’s leading Precision Engineering Firm.</li>
                        <li>To be India’s Driving force in the World of Automation and robots through Innovation and Persistence.</li>
                        <li>To inspire and impact the life of millions by uplifting the society and making constant mindful efforts for earth and its people.  </li>
                    </ul>
                </div>
            </>
        },
        {
            image: "https://images.unsplash.com/photo-1529883703457-6de9852c11f9?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Mission",
            content: <>
                <div>
                    <ul>
                        <li>To support our customers by providing superior products and services of exceptional value which help them gain competitive advantage in their markets.</li>
                        <li>To sustain our vision by constantly seeking renewal via continual improvement in processes, and the application of new technologies and best business practices. </li>
                        <li>To provide a pleasant, nurturing and growth oriented environment which encourages our employees to be highly productive and to grow personally and professionally.</li>
                    </ul>
                </div>
            </>
        },
        {
            image: "https://images.unsplash.com/photo-1469975827474-fbf5687e03e6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Core Values",
            content: <>
                <div>
                   <p> We at Bhawal Metal Industries strongly believe in the following:</p>
                    
                    <ul>
                        <li>Excellence</li>
                        <li>Integrity</li>
                        <li>Transparency</li>
                        <li>Innovation</li>
                        <li>Customer Service</li>
                        <li>Accountability</li>
                    </ul>
                </div>

            </>
        },

    ]
    return (
        <>
            <section id="MissionVisionContainer">
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
                            <Row key={index} gutter={[32, 32]} align="middle" className="containerGap" data-aos="fade-up"
                            data-aos-duration="1000">
                                {/* If index is even, display Image first, otherwise display Content first */}
                                {index % 2 === 0 ? (
                                    <>
                                        <Col lg={10} xs={24}>
                                            <div className="VisionMissionContainerImage">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                        </Col>
                                        <Col lg={12} xs={24}>
                                            <div>
                                                <h2 className="BigHeading">{item.title}</h2>
                                                {item.content}
                                            </div>
                                        </Col>
                                    </>
                                ) : (
                                    <>
                                        <Col lg={12} xs={24}>
                                            <div>
                                                <h2 className="BigHeading">{item.title}</h2>
                                                {item.content}
                                            </div>
                                        </Col>
                                        <Col lg={10} xs={24}>
                                            <div className="VisionMissionContainerImage">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                        </Col>
                                    </>
                                )}
                            </Row>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default VisionMissionValues
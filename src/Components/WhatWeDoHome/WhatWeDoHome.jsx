import React from "react";
import "./WhatWeDoHome.css"
import { Row, Col } from "antd";
const WhatWeDoHome = () => {

    const WhatWeDoCardsData = [
        {
            img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/wNkSGJWfkp9CHTFxZk8r/square bars2.png",
            title: "Stainless Steel Long Products",
        },
        {
            img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/bPR50N7W5QYDUqXVae2r/Forged rings.jpg",
            title: "Forging Components"
        },
        {
            img: "/Images/WhatWeDoImages/PrecisionMachine.jpg",
            title: "Precision Machining Components"
        }
    ];

    return (
        <>
            <section style={{ backgroundColor: "#161616" }}>
                <div id="WhatWeDoHomeContentContainer">
                    <div>
                        <h2 className="BigHeading textCenter" style={{ color: "white", marginBottom: "1rem" }}>What We Do?</h2>
                        <p className="textCenter">Bhawal Metal Industries working is divided in 3 major segments -</p>
                    </div>
                    <div className="CardContainer">
                        <div className="WhatWeDoCard">
                            <Row>
                                {WhatWeDoCardsData.map((item, index) => (
                                    <Col lg={8} md={24} style={{ width: "100%" }} key={index}     data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay={index * 200} >
                                        <div className="WhatWeCardContainerEdit">
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
                                                <div className="CardImageContainer">
                                                    <img src={item.img} alt={item.title} loading="lazy"/>
                                                </div>
                                                <div className="CardContentContainer">
                                                    <div>
                                                        <h2>{item.title}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default WhatWeDoHome
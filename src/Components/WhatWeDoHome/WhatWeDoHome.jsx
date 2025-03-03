import React from "react";
import "./WhatWeDoHome.css"
import STAINLESSSTEELLONG from "./STAINLESSSTEELLONG.svg"
import PRECISIONMACHINING from "./PRECISIONMACHINING.svg"
import FORGINGCOMPONENTS from "./FORGINGCOMPONENTS.svg"
import { Row, Col } from "antd";
const WhatWeDoHome = () => {

    const WhatWeDoCardsData = [
        {
            img: "/Images/WhatWeDoImages/STAINLESSSTEELLONGPRODUCTS.jpeg",
            title: "STAINLESS STEEL LONG PRODUCTS",
        },
        {
            img: "/Images/WhatWeDoImages/FORGINGCOMPONENTS.jpeg",
            title: "FORGING COMPONENTS"
        },
        {
            img: "/Images/WhatWeDoImages/PRECISIONMACHINING.jpg",
            title: "PRECISION MACHINING COMPONENTS"
        },
        // {
        //     img: "https://images.unsplash.com/photo-1686223679665-242fe8521ade?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     title: "-"
        // }
    ]
    return (
        <>
            <section style={{ backgroundColor: "#161616" }}>
                <div id="WhatWeDoHomeContentContainer">
                    <div>
                        <h2 className="BigHeading textCenter" style={{ color: "white", marginBottom: "1rem" }}>What We Do?</h2>
                        <p className="textCenter">Bhawal Metal Industries working is divided in 3 major segments</p>
                    </div>
                    <div className="CardContainer">
                        <div className="WhatWeDoCard">
                            <Row>
                                {WhatWeDoCardsData.map((item, index) => (
                                    <Col lg={8} md={24} style={{ width: "100%" }} key={index} data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay={index * 100}>
                                        <div className="WhatWeCardContainerEdit">
                                            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
                                                <div className="CardImageContainer">
                                                    <img src={item.img} alt="" />
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
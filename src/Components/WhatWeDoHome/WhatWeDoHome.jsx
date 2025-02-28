import React from "react";
import "./WhatWeDoHome.css"
import STAINLESSSTEELLONG from "./STAINLESSSTEELLONG.svg"
import PRECISIONMACHINING from "./PRECISIONMACHINING.svg"
import FORGINGCOMPONENTS from "./FORGINGCOMPONENTS.svg"
import { Row, Col } from "antd";
const WhatWeDoHome = () => {

    const WhatWeDoCardsData = [
        {
            img: "https://images.unsplash.com/photo-1686223679665-242fe8521ade?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "STAINLESS STEEL LONG PRODUCTS",
        },
        {
            img: "https://images.unsplash.com/photo-1602223114290-ba6de2938acc?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "FORGING COMPONENTS"
        },
        {
            img: "https://images.unsplash.com/photo-1601041839008-5de244b9bad9?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "PRECISION MACHINING COMPONENTS"
        },
        {
            img: "https://images.unsplash.com/photo-1686223679665-242fe8521ade?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "-"
        }
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
                                    <Col lg={12} md={24} style={{ width: "100%" }} key={index}>
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
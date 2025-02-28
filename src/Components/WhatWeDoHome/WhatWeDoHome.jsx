import React from "react";
import "./WhatWeDoHome.css"
import STAINLESSSTEELLONG from "./STAINLESSSTEELLONG.svg"
import PRECISIONMACHINING from "./PRECISIONMACHINING.svg"
import FORGINGCOMPONENTS from "./FORGINGCOMPONENTS.svg"
import { Row, Col } from "antd";
const WhatWeDoHome = () => {

    const WhatWeDoCardsData = [
        {
            img: "https://img.freepik.com/free-photo/background-with-metallic-grid-line-texture_52683-110685.jpg?t=st=1740650057~exp=1740653657~hmac=56498cdee61179fcbb5e351dbbbbc57467d36d25812ee0ebbe54494eacc5b658&w=1060",
            title: "STAINLESS STEEL LONG PRODUCTS",
        },
        {
            img: "https://img.freepik.com/free-photo/process-making-decorations-fence-large-smithy_7502-9141.jpg?t=st=1740650084~exp=1740653684~hmac=7915e1f48dfd37c79028fbe5fb132cd81a8a3e85632ddafdf127326c4073d3d7&w=1060",
            title: "FORGING COMPONENTS"
        },
        {
            img: "https://img.freepik.com/free-photo/industrial-machine-drilling-metal_342744-941.jpg?t=st=1740650104~exp=1740653704~hmac=d7a8d1d4ced713e3a80fe6076162ee6cee99954a8e2fab233f57e93e2999646d&w=1060",
            title: "PRECISION MACHINING COMPONENTS"
        },
        {
            img: "https://img.freepik.com/free-photo/industrial-machine-drilling-metal_342744-941.jpg?t=st=1740650104~exp=1740653704~hmac=d7a8d1d4ced713e3a80fe6076162ee6cee99954a8e2fab233f57e93e2999646d&w=1060",
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
                                            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
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
import React from "react";
import { Row, Col } from "antd";
import ServicesCarousal from "../../CommonUsedComponents/Nav/ServicesCarousal/ServicesCarousal";
import "./WhyChooseHome.css"
import { IoMdStar } from "react-icons/io";

const WhyChooseHome = () => {

    const WhyChooseData = [
        {
            title: "Durable, High Quality Materials",
            image:"/Images/durable 1.png",
            description: <>
                <p>We understand the Importance of Quality material as it is a key to delivers a durable and high-performing Finished Product.</p>
                <p>To Achieve this we make sure that all our material is according to ASTM Standards & are Ultra okay, hence free from Unwanted cracks, slags & air gaps, To ensure this a strict quality check is maintained over all the phases of manufacturing.</p>
            </>
        },
        {
            title: "Sustainable & Mindful Manufacturing",
            image:"/Images/sustainabilty.png",
            description: <>
                <p>To overcome the pressing environmental concerns like climate change, increasing carbon Footprint and conserving resources for our future generations, Bhawal Metal Industries has incorporated principles of Circular economy in our manufacturing process, Hence decreasing our overall carbon footprint and efficiently using our resources and reducing overall waste.</p>
            </>
        },
        {
            title: "Experienced & Reliable Technical Support",
            image:"/Images/technical.png",
            description: <>
                <p>Our dedicated team of experienced professionals who have the latest know-how of the latest technologies and the best practices to provide their customers with premium quality products and Pre & Post-Sales services. The companies motto excellence with metal is very deeply instilled in its work ethics and it strives to achieve customer satisfaction through our quality products and services.</p>
            </>
        },
        {
            title: "Customer Satisfaction",
            image:"/Images/Customer.png",
            description: <>
                <p>We Believe in developing Everlasting Business relations with our clients and We keep working on it mindfully by taking regular feedbacks and improving our pre and post sales services. This Customer-centric approach and dedicated efforts to cater our clients better has helped us Grow and achieve 86% returning clients.</p>
            </>
        }
    ]
    return (
        <>
            <section>
                <div id="WhyChooseHomeContentContainer">
                    <div>
                        <h2 className="BigHeading textCenter">Why Choose Bhawal Metal Industries?</h2>
                    </div>
                    <div className="AnimatedHoverCards">
                        <Row>
                            {WhyChooseData.map((item, index) => (
                                <Col lg={6} md={12}>
                                    <div className="WhyChooseCardAnimationEdit">
                                        <div>
                                           <img src={item.image} alt="" />
                                        </div>
                                        <div>
                                            <div>
                                                <h2 style={{ textTransform: "uppercase" }}>{item.title}</h2>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>

            </section>
        </>
    )
}
export default WhyChooseHome
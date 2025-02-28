import React, { useState } from "react";
import "./Nav.css"
import { Row, Col, Drawer } from "antd";
import { IoIosMenu } from "react-icons/io";
import NavigationDataLinks from "./NavigationLinks";
import { Link } from "react-router-dom";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div id="navigationBarAdjust">
                <div className="NavigationbarContainer">
                    <Row>
                        <Col lg={24}>
                            <div>
                                <div className="AdjustBothContainerNavigation">
                                    <div className="BrandLogoContainer">
                                        <img src="/Images/BMILogo.svg" alt="" style={{ display: "none" }} />
                                    </div>
                                    <div className="MenuBtnContainer">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <IoIosMenu onClick={showDrawer} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Drawer placement="left" title="Bhawal Metal Industries" onClose={onClose} open={open}>
                    <div className="NavigationContainer">
                        <ul className="navigationLinksContainerList">
                            {NavigationDataLinks.map((item, index) => (
                                <Link to={item.path} onClick={onClose}>  <li key={index}>
                                    {item.link}
                                </li></Link>
                            ))}

                        </ul>
                    </div>
                    <div className="ContactBtnContainer">
                        <div className="HeightAdjustContainer">
                               <h2 style={{color:"white"}}> Contact info</h2>
                        </div>
                    </div>
                </Drawer>
            </div>
        </>
    )
}
export default Nav
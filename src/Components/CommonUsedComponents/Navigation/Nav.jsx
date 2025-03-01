import React, { useState, useEffect } from "react";
import "./Nav.css"
import { Row, Col, Drawer } from "antd";
import { IoIosMenu } from "react-icons/io";
import NavigationDataLinks from "./NavigationLinks";
import { Link } from "react-router-dom";
const Nav = () => {
    const [open, setOpen] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Increase height up to a max of 70px based on scroll position
            let newHeight = Math.min(window.scrollY, 75);
            setScrollHeight(newHeight);
            setIsScrolled(window.scrollY > 70);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div id="navigationBarAdjust">
                <div className="FillContainerOnBack" style={{ height: `${scrollHeight}px` }}>

                </div>
                <div className="NavigationbarContainer">
                    <Row>
                        <Col lg={24} style={{ width: "100%" }}>
                            <div>
                                <div className="AdjustBothContainerNavigation">
                                    <div className="BrandLogoContainer">
                                        <a href="/"> <img src="/Images/BhawalLogo.png" alt="" /></a>
                                    </div>
                                    <div className="MenuBtnContainer">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <IoIosMenu onClick={showDrawer} style={{ color: isScrolled ? "black" : "white", }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Drawer placement="right" title="Bhawal Metal Industries" onClose={onClose} open={open}>
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
                            <h2 style={{ color: "white" }}> Contact info</h2>
                        </div>
                    </div>
                </Drawer>
            </div>
        </>
    )
}
export default Nav
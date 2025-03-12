import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Row, Col, Drawer } from "antd";
import { IoIosMenu } from "react-icons/io";
import NavigationDataLinks from "./NavigationLinks";
import { Link } from "react-router-dom";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [logoSize, setLogoSize] = useState(150); // Default logo size
    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);
    useEffect(() => {
        const handleScroll = () => {
            let newHeight = Math.min(window.scrollY, 84);
            setScrollHeight(newHeight);
            setIsScrolled(window.scrollY > 100); // Change state when scrolled 100px

            // Adjust logo size smoothly
            setLogoSize(window.scrollY > 50 ? 120 : 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <>
            <div id="navigationBarAdjust">
                <div className="FillContainerOnBack" style={{ height: `${scrollHeight}px` }}></div>
                <div className="NavigationbarContainer">
                    <Row>
                        <Col lg={24} style={{ width: "100%" }}>
                            <div>
                                <div className="AdjustBothContainerNavigation">
                                    <div className="BrandLogoContainer">
                                        <Link to="/">
                                            <img
                                                src="/Images/BhawalLogo.png"
                                                alt="Bhawal Logo"
                                                loading="lazy"
                                                style={{ width: `${logoSize}px`, transition: "width 0.3s ease-in-out" }}
                                            />
                                        </Link>
                                    </div>
                                    <div className="MenuBtnContainer">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <ul className="PCShowNavigationLinks">
                                                {NavigationDataLinks.map((item, index) => (
                                                    <Link key={index} to={item.path} style={{ color: isScrolled ? "black" : "white", transition: "color 0.3s ease-in-out" }}>
                                                        <li key={index}>{item.link}</li>
                                                    </Link>
                                                ))}
                                            </ul>
                                            <IoIosMenu onClick={showDrawer} style={{ color: isScrolled ? "black" : "white" }} />
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
                                <Link to={item.path} onClick={onClose} key={index}>
                                    <li>{item.link}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="ContactBtnContainer">
                        <div className="HeightAdjustContainer">
                            <h2 style={{ color: "white" }}>Contact info</h2>
                        </div>
                    </div>
                </Drawer>
            </div>
        </>
    );
};

export default Nav;

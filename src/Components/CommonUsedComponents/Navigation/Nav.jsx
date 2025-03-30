import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Row, Col, Drawer } from "antd";
import { IoIosMenu } from "react-icons/io";
import NavigationDataLinks from "./NavigationLinks";
import { Link } from "react-router-dom";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
const Nav = () => {
    const [open, setOpen] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(84);
    const [isScrolled, setIsScrolled] = useState(false);
    const [logoSize, setLogoSize] = useState(150); // Default logo size
    const [hasScrolled100px, setHasScrolled100px] = useState(false); // New state
    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            let newHeight = Math.min(window.scrollY, 84);
            setScrollHeight(newHeight);
            setIsScrolled(window.scrollY > 100); // Change state when scrolled 100px

            // Adjust logo size smoothly
            setLogoSize(window.scrollY > 50 ? 140 : 150);
            setHasScrolled100px(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <>
            <div id="navigationBarAdjust">
                <div
                    className="FillContainerOnBack"
                    style={{
                        marginTop: hasScrolled100px ? "0rem" : "2rem",
                        marginLeft: hasScrolled100px ? "0rem" : "3rem", // Corrected
                        marginRight: hasScrolled100px ? "0rem" : "3rem", // Corrected
                        transition: "0.5s",
                    }}
                ></div>
                <div className="NavigationbarContainer" style={{ marginTop: hasScrolled100px ? "0rem" : "2rem", transition: "0.5s" }}>
                    <Row style={{ width: "100%" }}>
                        <Col lg={24} style={{ width: "100%" }}>
                            <div>
                                <div className="AdjustBothContainerNavigation">
                                    <div className="BrandLogoContainer" style={{ display: "flex" }}>
                                        <Link to="/" style={{ display: "flex" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                            <img
                                                src="/Images/BhawalLogo.png"
                                                alt="Bhawal Logo"
                                                loading="lazy"
                                                style={{ width: hasScrolled100px ? "144px" : "140px", transition: "0.5s" }}
                                            />
                                        </Link>
                                    </div>
                                    <div className="MenuBtnContainer">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <ul className="PCShowNavigationLinks">
                                                {NavigationDataLinks.map((item, index) => (
                                                    <Link key={index} to={item.path} style={{ color: isScrolled ? "black" : "black", transition: "color 0.3s ease-in-out" }}>
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
                            <div>
                                <div className="ContactNumbers">
                                    <p><a href="tel:+91 93270 18703"><MdOutlinePhoneInTalk /> &nbsp;+91 93270 18703</a></p>
                                    <p><a href="tel:+91 76007 29708"><MdOutlinePhoneInTalk /> &nbsp;+91 76007 29708</a></p>
                                    <p> <a href="tel:+91 92272 18702"><MdOutlinePhoneInTalk /> &nbsp;+91 92272 18702</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>
        </>
    );
};

export default Nav;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageRoutes from "./HomePageRoutes";
import Nav from "../CommonUsedComponents/Navigation/Nav";
import AboutUs from "../AllComponents/AboutUs/AboutUs";
import FacilitiesAndServices from "../AllComponents/FacilitiesAndServices /FacilitiesAndServices";
import Industries from "../AllComponents/Industries/Industries";
import MetalGrades from "../AllComponents/MetalGrades/MetalGrades";
const AllRoutes = () => {
    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<HomePageRoutes />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/facilities-and-services" element={<FacilitiesAndServices />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/metal-grades" element={<MetalGrades />} />

            </Routes>
        </Router>
    );
};

export default AllRoutes;
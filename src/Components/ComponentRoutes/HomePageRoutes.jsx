import React from "react";
import HeroHome from "../AllComponents/HeroHome/HeroHome";
import WhoAreWeHome from "../AllComponents/WhoAreWeHome/WhoAreWeHome";
import WhatWeDoHome from "../WhatWeDoHome/WhatWeDoHome";
import WhyChooseHome from "../AllComponents/WhyChooseHome/WhyChooseHome";
import ServicesCarousal from "../CommonUsedComponents/Nav/ServicesCarousal/ServicesCarousal";
import Blog from "../AllComponents/Blog/Blog";

const HomePageRoutes=()=>{
    return(
        <>
        <HeroHome/>
        <WhoAreWeHome/>
        <WhatWeDoHome/>
        <WhyChooseHome/>
        <ServicesCarousal/>
        <Blog/>
        </>
    )
}
export default HomePageRoutes
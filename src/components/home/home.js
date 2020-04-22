import React from "react";
import SectionFirst from "./1_SecionFirst/SectionFirst";
import SectionSecond from "./2_SectionSecond/SectionSecond";
import SectionWhatAbout from "./3_SectionThirdWhatAbout/SectionWhatAbout";
import ArticleAboutUS from "./4_SectionFourthAboutUs/SectionAboutUs";
import SectionHelp from "./5_SectionFifthHelp/SectionHelp";
import SectionForm from "./6_SectionSixthForm/SectionForm";
import Footer from "./7_SectionSeventhFooter/Footer";

const Home = () => {
    return (
        <>
           <SectionFirst/>
           <SectionSecond/>
           <SectionWhatAbout/>
           <ArticleAboutUS/>
           <SectionHelp/>
           <SectionForm/>
           <Footer/>
        </>
    )
};
export default Home;
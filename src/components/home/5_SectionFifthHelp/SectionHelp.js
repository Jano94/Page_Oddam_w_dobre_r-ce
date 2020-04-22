import React from "react";
import {Element} from "react-scroll";
import decoration from "./../../../assets/decoration.png"
import ButtonsHelp from "./ButtonsHelp";

const SectionHelp = () => {
return (
    <>
    <Element name="articleHelp" className="container section-help">
        <h2 className="article-title"> Komu pomagamy?</h2>
        <img src={decoration} alt="decoration" className="decorationIMG"/>
        <ButtonsHelp/>
    </Element>
    </>
)
};
export default SectionHelp;
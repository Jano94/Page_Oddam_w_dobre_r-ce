import React from "react";
import decoration from "../../../assets/decoration.png";
import shirt from "../../../assets/t-shirt.png";
import box from "../../../assets/box.png";
import loop from "../../../assets/loop.png";
import arrows from "../../../assets/arrows.png";
import SectionColWG from "./SectionColWG";
import {NavLink} from "react-router-dom";
import {Element} from "react-scroll"

const SectionWhatAbout = () => {

    return (
        <>
            <Element name="articleWhatGoing" className="container section-what-going">
                <div>
                    <h2 className="article-title-wg"> Wystarczą 4 proste kroki </h2>
                    <img src={decoration} alt="decoration" className="decorationIMG"/>
                </div>
                <article className="row article-what-going">
                    <div className="col-2"> </div>
                    <div className="col-2">
                <SectionColWG img={shirt} alt={"t-shirt"} title={"Wybierz rzeczy"}
                              text={"ubrania, zabawki, sprzęt i inne"}/>
                    </div>
                    <div className="col-2">
                <SectionColWG img={box} alt={"package box"} title={"Spakuj je"}
                              text={"skorzystaj z worków na śmieci"}/>
                    </div>
                    <div className="col-2">
                <SectionColWG img={loop} alt={"loop"} title={"Zdecyduj komu chcesz pomóc"}
                              text={"wybierz zaufane miejsce"}/>
                    </div>
                    <div className="col-2">
                <SectionColWG img={arrows} alt={"loading arrows"} title={"Zamów kuriera"}
                              text={"kurier przyjedzie w dogodnym terminie"}/>
                    </div>
                    <div className="col-2"> </div>
                </article>
                <div className="article-buttons">
                    <button className="art-button"><NavLink className="link-primary" to="/login">ODDAJ RZECZY</NavLink></button>
                </div>
            </Element>
        </>
    )


};
export default SectionWhatAbout;
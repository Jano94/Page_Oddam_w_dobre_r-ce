import React from "react";
import decoration from "./../../../assets/decoration.png"
import  clothes from "./../../../assets/cloathes.png"
import {Element} from "react-scroll"
import Form from "./Form";
const SectionForm = () => {

    return (
        <>
            <Element name="articleForm" className="container section-contact">
                <div className="row">
                    <div className="col-7">
                        <img src={clothes} alt="clothes" className="mainIMG"/>
                    </div>
                    <div className="col-5">
                        <h2 className="article-title"> Skontaktuj się z nami</h2>
                        <img src={decoration} alt="decoration" className="decorationIMG"/>
                        <Form/>
                    </div>
                </div>
            </Element>
        </>
    )
};
export default SectionForm
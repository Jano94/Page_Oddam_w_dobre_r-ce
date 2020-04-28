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
                    <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                        <img src={clothes} alt="clothes" className="mainIMG"/>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                        <div className="form-info">
                        <h2 className="article-title"> Skontaktuj się z nami</h2>
                        <img src={decoration} alt="decoration" className="decorationIMG"/>
                        </div>
                        <Form/>
                    </div>
                </div>
            </Element>
        </>
    )
};
export default SectionForm
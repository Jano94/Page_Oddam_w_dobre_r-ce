import React from "react";
import people from "./../../../assets/people.png";
import decoration from "./../../../assets/decoration.png";
import signature from "./../../../assets/signature.png"
import {Element} from "react-scroll"

const SectionAboutUs = () => {
    return (
        <Element name="articleAboutUS" className="section-about-us">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="article-wg-box">
                        <h2 className="article-title"> O nas </h2>
                        <img src={decoration} alt="decoration" className="decorationIMG"/>
                        <p className="article-text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <img src={signature} alt="signature" className="signature"/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img src={people} alt="happy peoples" className="peopleIMG"/>
                </div>

            </div>
        </Element>
    )
};

export default SectionAboutUs;
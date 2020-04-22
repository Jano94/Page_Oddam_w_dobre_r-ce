import React from "react";
import people from "./../../../assets/people.png";
import decoration from "./../../../assets/decoration.png";
import signature from "./../../../assets/signature.png"
import {Element} from "react-scroll"

const SectionAboutUs = () => {
    return (
        <Element name="articleAboutUS" className="container section-about-us">
            <div className="row">
                <div className="col-6">
                    <div className="article-wg-box">
                        <h2 className="article-title"> O nas </h2>
                        <img src={decoration} alt="decoration" className="decorationIMG"/>
                        <p className="article-text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <img src={signature} alt="signature" className="signature"/>
                    </div>
                </div>
                <div className="col-6">
                    <img src={people} alt="happy peoples" className="mainIMG"/>
                </div>

            </div>
        </Element>
    )
};

export default SectionAboutUs;
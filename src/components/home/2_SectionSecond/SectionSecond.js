import React from "react";
import SectionColumns from "./SectionColumns";

const SectionSecond = () => {
    return (
        <section className="container article-yellow">
            <div className="row">
                <div className="col-4">
                    <SectionColumns num={10} text={"ODDANYCH WORKÓW"}/>
                </div>
                <div className="col-4">
                    <SectionColumns num={5} text={"WSPARTYCH ORGANIZACJI"}/>
                </div>
                <div className="col-4">
                    <SectionColumns num={7} text={"ZORGANIZOWANY ZBIÓREK"}/>
                </div>
            </div>
        </section>
    )
};
export default SectionSecond;
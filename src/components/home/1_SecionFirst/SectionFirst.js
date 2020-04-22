import React from "react";
import HeaderNav from "./header/HeaderNav";
import SectionMenu from "./SectionMenu/SectionMenu";
import SectionIMG from "./SectionMenu/SectionIMG";

const SectionFirst = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-5">
                    <SectionIMG/>
                </div>

                <div className="col-7">
                <HeaderNav/>
                <SectionMenu/>
                </div>
           </div>
        </section>

    )
};
export default SectionFirst;
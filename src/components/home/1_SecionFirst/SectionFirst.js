import React from "react";
import HeaderNav from "./header/HeaderNav";
import SectionMenu from "./SectionMenu/SectionMenu";
import SectionIMG from "./SectionMenu/SectionIMG";

const SectionFirst = () => {
    return (
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <SectionIMG/>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <HeaderNav/>
                <SectionMenu/>
                </div>
           </div>


    )
};
export default SectionFirst;
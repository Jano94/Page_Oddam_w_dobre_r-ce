import React from "react";
import HeaderNav from "./header/header_nav";
import SectionMain from "./main_section/main._section";
import MainIMG from "./main_section/main_img";

const MenuMain = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-5">
                    <MainIMG/>
                </div>

                <div className="col-7">
                <HeaderNav/>
                <SectionMain/>
                </div>
           </div>
        </section>

    )
};
export default MenuMain;
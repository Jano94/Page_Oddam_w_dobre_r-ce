import React from "react";
import HeaderIMG from "./header/header_img";
import HeaderNav from "./header/header_nav";

const Menu_main = () => {
    return (
        <section className="container">
            <HeaderIMG/>
            <HeaderNav/>
            <Menu_main/>
        </section>
    )
};
export default Menu_main;
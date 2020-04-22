import React from "react";
import facebook from "./../../../assets/facebook.png"
import instagram from "./../../../assets/instagram.png"
const Footer = () => {

    return (
        <section className="footer">
            <a  href="https://www.facebook.com/">
                <img src={facebook} alt="" className="icon-link" />
            </a>
            <a href="https://www.instagram.com/">
                <img src={instagram} alt="" className="icon-link"/>
            </a>
        </section>
    )
};
export default Footer;
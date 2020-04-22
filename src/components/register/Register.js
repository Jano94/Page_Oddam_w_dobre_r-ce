import React from "react";
import HeaderNav from "../home/1_SecionFirst/header/HeaderNav";
import decoration from "./../../assets/decoration.png";

const Register = () => {

    return (
        <>
            <section className="container">
                <HeaderNav/>
                <div className="login-box">
                    <h2 className="login-head">Załóż konto</h2>
                    <img src={decoration} alt="decoration" className="decorationIMG"/>
                </div>

            </section>
        </>
    )
};
export default Register;
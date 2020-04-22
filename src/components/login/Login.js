import React from "react";
import HeaderNav from "../home/1_SecionFirst/header/HeaderNav";
import decoration from "./../../assets/decoration.png";
import LoginForm from "./LoginForm";

const Login = () => {

    return (
        <>
        <section className="container">
                <HeaderNav/>
                <div className="login-box">
                    <h2 className="login-head"> Zaloguj się</h2>
                    <img src={decoration} alt="decoration" className="decorationIMG"/>
                </div>
                <LoginForm/>

        </section>
        </>
    )
};
export default Login;
import React, {useState} from "react";
import HeaderNav from "../home/1_SecionFirst/header/HeaderNav";
import decoration from "./../../assets/decoration.png";
import LoginForm from "./LoginForm";

const Login = (login) => {

    return (
        <>
        <section className="container">
                <HeaderNav logo={login}/>
                <div className="login-box">
                    <h2 className="login-head"> Zaloguj się</h2>
                    <img src={decoration} alt="decoration" className="decorationIMG"/>
                </div>
                <LoginForm logo={login}/>
        </section>
        </>
    )
};
export default Login;
import React from "react";
import HeaderNav from "../home/1_SecionFirst/header/HeaderNav";
import decoration from "../../assets/decoration.png"
import {NavLink} from "react-router-dom";
const LogOut = () => {


    return (
        <>
            <HeaderNav/>
            <section className="log-out">
                <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                <img src={decoration} alt={decoration} className="decorationIMG"/>
                <button className="btn">
                    <NavLink className="link-primary" to="/" >Strona główna</NavLink>
                </button>
            </section>
        </>
  )

};
export default LogOut;
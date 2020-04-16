import React from "react";
import {Link} from "react-router-dom";

const HeaderNav = () => {
  return (
      <>
        <div className="nav-primary">
          <button className="button-login"><Link className="link-primary" to="/login"> Zaloguj</Link> </button>
          <button className="button-register"><Link className="link-primary" to="/register">Załóż konto</Link></button>
        </div>
        <ul className="nav-secondary">
            <li className="nav-menu nav-start">Start</li>
            <li className="nav-menu">O co chodzi?</li>
            <li className="nav-menu">O nas</li>
            <li className="nav-menu">Fundacja i organizacje</li>
            <li className="nav-menu">Kontakt</li>
        </ul>
      </>
  )
};
export default HeaderNav;
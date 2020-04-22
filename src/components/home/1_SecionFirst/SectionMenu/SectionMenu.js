import React from "react";
import { Link } from "react-router-dom";
import decoration from "../../../../assets/decoration.png"

const SectionMenu = () => {
  return (
      <article className="article-main">
          <div className="article">
              <h2 className="article-text">Zacznij pomagać!</h2>
              <h2 className="article-text"> Oddaj niechciane rzeczy w zaufane ręce</h2>
              <img src={decoration} alt="decoration" className="decorationIMG"/>
              <div className="article-buttons">
                  <button className="art-button"><Link className="link-primary" to="/login">ODDAJ RZECZY</Link></button>
                  <button className="art-button"><Link className="link-primary" to="/login">ZORGANIZUJ ZBIÓRKĘ</Link> </button>
              </div>
          </div>
      </article>
  )
};
export default SectionMenu;
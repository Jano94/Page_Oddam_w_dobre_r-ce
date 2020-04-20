import React from "react";

const ArticleColWG = ({img, alt, title, text}) => {

    return(
        <>
            <img src={img} alt={alt} className="img-icons"/>
            <div className="article-wg-box">
                <h3 className="article-title-col">{title}</h3>
                <p className="article-info-wg"> {text}</p>
            </div>
        </>
    )
};
export default ArticleColWG;
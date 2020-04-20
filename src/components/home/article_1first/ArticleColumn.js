import React from "react";

const ArticleColumn = ({num, text}) => {

    return(
        <>
            <h1 className="article-num"> {num}</h1>
            <div className="article-title"> {text} </div>
            <p className="article-info"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </>
        )
};
export default ArticleColumn;
import React from "react";
import ArticleColumn from "./article_columns";

const FirstArticle = () => {
    return (
        <article className="container article-yellow">
            <div className="row">
                <div className="col-4">
                    <ArticleColumn num={10} text={"ODDANYCH WORKÓW"}/>
                </div>
                <div className="col-4">
                    <ArticleColumn num={5} text={"WSPARTYCH ORGANIZACJI"}/>
                </div>
                <div className="col-4">
                    <ArticleColumn num={7} text={"ZORGANIZOWANY ZBIÓREK"}/>
                </div>
            </div>
        </article>
    )
};
export default FirstArticle;
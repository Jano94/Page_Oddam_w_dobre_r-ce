import React from "react";

const Pagination = ({postPerSlide, slides, onPaginate}) => {
    const numberOfPages = Math.ceil(slides.length / postPerSlide);
    const pages = [];
    console.log(numberOfPages)
    for(let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
    }

        return (
      <nav>
        <ul className="slide-pagination">
            {pages.map(numberOfPage => (
                <li key={numberOfPage} className="slide-item">
                    <button onClick={()=>onPaginate(numberOfPage)} className="slide-button">
                        {numberOfPage}
                    </button>
                </li>
            ))}
        </ul>
      </nav>
  )
};
export default Pagination;
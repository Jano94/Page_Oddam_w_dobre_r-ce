import React from 'react';


export const Pagination = ({itemsPerPage, items, onPaginate}) => {
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const pageNumbers = new Array(pageCount).fill(0);

    return (
        <nav>
            <ul className="slide-pagination">
                {pageCount > 1 && pageNumbers.map((x, pageNumber) => (
                    <li key={pageNumber} className="slide-item">
                        <button onClick={() => onPaginate(pageNumber + 1)} className="slide-button">
                            {pageNumber + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
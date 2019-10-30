import React from "react";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;

  let pageArray = new Array(pageCount).fill(0).reduce((acc, _, idx) => {
    acc.push(idx + 1);
    return acc;
  }, []);

  return (
    <nav>
      <ul className="pagination">
        {pageArray.map(page => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

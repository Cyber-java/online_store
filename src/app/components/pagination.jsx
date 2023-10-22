import React from "react";
import _ from "lodash";

const Pagination = ({ smartphones, pageSize, onPageChange, currentPage }) => {
  const count = smartphones.length;
  const pageCount = Math.ceil(count / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {pages.map((page) => (
            <li
              className={page === currentPage ? "page-item " + "active" : ""}
              key={"page_" + page}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;

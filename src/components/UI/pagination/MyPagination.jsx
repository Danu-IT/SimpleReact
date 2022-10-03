import React from "react";
import { getPagesArray } from "../../../utils/pages";

const MyPagination = ({ totalPages, page, setPage }) => {
  const swapPage = (page) => {
    setPage(page);
  };

  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="pagePagination">
      {pagesArray.map((el) => {
        return (
          <span
            key={el}
            className={page === el ? "page page__current" : "page"}
            onClick={() => swapPage(el)}
          >
            {el}
          </span>
        );
      })}
    </div>
  );
};

export default MyPagination;

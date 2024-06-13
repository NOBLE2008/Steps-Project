import React from "react";

const Previous = ({ page, setPage }) => {
  const leftClickHandler = (e) => {
    page >= 1
      ? setPage(() => {
          return page - 1;
        })
      : setPage(1);
  };
  return (
    <button
      className={`previous${page - 1 <= 0 ? " disabled" : ""}`}
      disabled={page - 1 <= 0 ? true : false}
      onClick={leftClickHandler}
    >
      Previous
    </button>
  );
};

export default Previous;

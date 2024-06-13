import React from "react";

const Next = ({ page, setPage, steps }) => {
  const rightClickHandler = (e) => {
    page >= 1
      ? setPage(() => {
          return page + 1;
        })
      : setPage(1);
  };
  return (
    <button
      className={`next${page - 1 >= steps.length - 1 ? " disabled" : ""}`}
      disabled={page - 1 >= steps.length - 1 ? true : false}
      onClick={rightClickHandler}
    >
      Next
    </button>
  );
};

export default Next;

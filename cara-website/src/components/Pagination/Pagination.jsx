import React from "react";
import style from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={`${style.pagination} sectionp1`}>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">
        <i className="fal fa-long-arrow-alt-right"></i>
      </a>
    </div>
  );
};

export default Pagination;

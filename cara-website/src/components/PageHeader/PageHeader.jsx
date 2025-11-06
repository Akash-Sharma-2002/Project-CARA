import React from "react";
import style from "./pageHeader.module.css";


const PageHeader = ({ h2, p, bGI }) => {
  return (
    <div
      className={style.pageHeader}
      style={{ backgroundImage: `url(${bGI})` }}
    >
      <h2>{h2}</h2>
      <p>{p}</p>
    </div>
  );
};

export default PageHeader;

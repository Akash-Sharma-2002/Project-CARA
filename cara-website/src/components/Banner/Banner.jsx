import React from "react";
import style from "./banner.module.css";

const Banner = () => {
  return (
    <div id={style.banner} className={style.sectionm1}>
      <h4>Repair Service</h4>
      <h2>Up to <span>70% Off</span> - All Tshirts & Accessories</h2>
      <button className="normal">Explore More</button>
    </div>
  );
};

export default Banner;

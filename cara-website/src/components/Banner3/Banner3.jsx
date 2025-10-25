import React from "react";
import style from "./banner3.module.css";

const Banner3 = () => {
  return (
    <div className={style.banner3}>
      <div className={style.bannerBox}>
        <h2>SEASONAL SALE</h2>
        <h3>Winter Collection</h3>
      </div>
      <div className={`${style.bannerBox} ${style.bannerBox2}`}>
        <h2>NEW FOOTWARE COLLECTION</h2>
        <h3>Spring / Summer</h3>
      </div>
      <div className={`${style.bannerBox} ${style.bannerBox3}`}>
        <h2>T-SHIRTS</h2>
        <h3>New Trendy Prints</h3>
      </div>
    </div>
  );
};

export default Banner3;

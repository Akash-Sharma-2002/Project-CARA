import React from "react";
import style from "./smbanner.module.css";

const SmBanner = () => {
  return (
    <div className={`${style.smBanner} sectionp1`}>
      <div className={style.bannerBox}>
        <h4>crazy deals</h4>
        <h2>buy 1 get 1 free</h2>
        <span>The best classic dress is on sale at cara</span>
        <button className="white">Learn More</button>
      </div>
      <div className={`${style.bannerBox} ${style.bannerBox2}`}>
        <h4>Spring/Summer</h4>
        <h2>Upcomming seasons</h2>
        <span>The best classic dress is on sale at cara</span>
        <button className="white">Collection</button>
      </div>
    </div>
  );
};

export default SmBanner;

import React from "react";
import style from "./hero.module.css";


const Hero = () => {
  return (
    <div id={style.hero}>
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more coupons and upto 70% off</p>
      <button>Shop Now</button>
    </div>
  );
};

export default Hero;

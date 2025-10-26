import React, { useState } from "react";
import style from "./ProDetails.module.css";
import sPImg from "../../assets/products/f1.jpg";
import { smallImg } from "../../assets/asset";

const ProDetails = () => {
  const [quantity, setQuantity] = useState("1");
  const [mainImgSrc, setMainImgSrc] = useState(sPImg);
  return (
    <div className={`${style.proDetails} sectionp1`}>
      <div className={style.singleProImg}>
        <img src={mainImgSrc} id="MainImg" width="100%" alt="" />
        <div className={style.smallImgGroup}>
          {smallImg.map((item, key) => {
            return (
              <div className="smallImgCol" key={key}>
                <img
                  src={item}
                  width="100%"
                  className={style.smallImg}
                  alt=""
                  onClick={() => setMainImgSrc(item)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.singleProDetails}>
        <h6>Home / T-Shirt</h6>
        <h4>Men's Fashion T Shirt</h4>
        <h2>$139.00</h2>
        <select>
          <option>Select Size</option>
          <option>XL</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
        </select>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button className="normal">Add To Cart</button>
        <h4>Product Details</h4>
        <span>
          The Gildan Ultra Cotton T-Shirt is made from sustantial 6.0 oz. per
          sq. yd. fabric constructed from 100% cotton, this classic fit
          preshrunk jersey knit provides unmatched comfort with each wear.
          Featuring a taped neck and shoulder, and a seamless double needed
          collar, and available in a range of colors, it offers it all in the
          ultimate head-turning package.
        </span>
      </div>
    </div>
  );
};

export default ProDetails;

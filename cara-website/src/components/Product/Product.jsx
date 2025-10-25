import React from "react";
import style from "./product.module.css";

const Product = (props) => {
  const { type, para, products } = props;
  return (
    <div className={`${style.product} sectionp1`}>
      <h2>{type}</h2>
      <p>{para}</p>
      <div className={style.proContainer}>
        {products.map((item, index) => {
          return (
            <div key={index} className={style.pro}>
              <img src={item.p_img} alt="" />
              <div className={style.des}>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirt</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <i className="fal fa-shopping-cart" id={style.cart}></i>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;

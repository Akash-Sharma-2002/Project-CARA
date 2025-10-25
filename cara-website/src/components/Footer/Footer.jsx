import React from "react";
import style from "./footer.module.css";
import { asset } from "../../assets/asset";
import { pay } from "../../assets/asset";
const Footer = () => {
  return (
    <div className={`${style.footer} sectionp1`}>
      <div className={style.col}>
        <img src={asset.logo} className={style.logo} alt="" />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> 562, Wellington, Road, Street 32,Francisco
        </p>
        <p>
          <strong>Phone:</strong> +01 2222356 / +91 01234 56789
        </p>
        <p>
          <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
        </p>
        <div className={style.follow}>
          <h4>Follow Us</h4>
          <div className={style.icon}>
            <i className={`fab fa-facebook-f`}></i>
            <i className={`fab fa-twitter`}></i>
            <i className={`fab fa-instagram`}></i>
            <i className={`fab fa-pinterest-p`}></i>
            <i className={`fab fa-youtube`}></i>
          </div>
        </div>
      </div>
      <div className={style.col}>
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div className={style.col}>
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track Order</a>
        <a href="#">Help</a>
      </div>
      <div className={`${style.col} ${style.install}`}>
        <h4>Install App</h4>
        <p>From App Store or Google play</p>
        <div className={style.row}>
          <img src={pay.appStore} alt="" />
          <img src={pay.play} alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={pay.pay1} alt="" />
      </div>
      <div className={style.copyright}>
        <p>&copy; 2021, Tech2etc - HTML, CSS, ECommerce Template</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import style from "./newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={`${style.newsletter} sectionm1 sectionp1`}>
      <div className={style.newstext}>
        <h4>Sign up For newsletter</h4>
        <p>
          Get E-mail updates about our latest shop and &nbsp;
          <span>special offers.</span>
        </p>
      </div>
      <div className={style.form}>
        <input type="text" name=""  id=""placeholder="Your email address" />
        <button className= "normal">Sign Up</button>
      </div>
    </div>
  );
};

export default Newsletter;

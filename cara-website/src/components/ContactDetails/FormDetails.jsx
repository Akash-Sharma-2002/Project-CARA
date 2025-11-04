import React from "react";
import style from "./ContactDetails.module.css";
import People from "./People";

const FormDetails = () => {
  return (
    <div className={style.formDetails}>
      <form action="">
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Subject" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <button className="normal">Submit</button>
      </form>
      <People />
    </div>
  );
};

export default FormDetails;

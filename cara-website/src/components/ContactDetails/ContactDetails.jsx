import React from "react";
import style from "./ContactDetails.module.css";

const ContactDetails = () => {
  return (
    <div className={`${style.contactDetails} sectionp1`}>
      <div className={style.details}>
        <span>GET IN TOUCH</span>
        <h2>Visit our agency locations or contact us today</h2>
        <h3>Head Office</h3>
        <div>
          <ul>
            <li>
              <i className="fal fa-map"></i>
              <p>56 Glassford Street Glassgow G1&nbsp;&nbsp;1UL New York</p>
            </li>
            <li>
              <i className="fal fa-envelope"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i className="fal fa-phone-alt"></i>
              <p>+1-123-456-7890</p>
            </li>
            <li>
              <i className="fal fa-clock"></i>
              <p>Monday to Saturday: 9:00am to 16:00pm</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.565158688084!2d80.98979797563977!3d26.853779662620337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2cc31c47117%3A0xc12c4fd2be195079!2sSt%20Joseph%20Hospital!5e0!3m2!1sen!2sin!4v1761847358223!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactDetails;

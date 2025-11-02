import React from "react";
import style from "./AboutApp.module.css";
import aboutVideo from "../../assets/about/1.mp4";

const AboutApp = () => {
  return (
    <div className={`${style.aboutApp} sectionp1`}>
      <h1>
        Download our <a href="#">App</a>
      </h1>
      <div className={style.video}>
        <video autoPlay muted loop src={aboutVideo}></video>
      </div>
    </div>
  );
};

export default AboutApp;

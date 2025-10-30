import React from "react";
import style from "./AboutHead.module.css";
import aboutImg from "../../assets/about/a6.jpg";

const AboutHead = () => {
  return (
    <div className={`${style.aboutHead} sectionp1`}>
      <img className={style.img} src={aboutImg} alt="" />
      <div className={style.div}>
        <h2>Who are we?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
          officiis velit quisquam architecto incidunt voluptatum assumenda
          cupiditate libero odit aperiam ut est, deserunt illum commodi dolores
          placeat, perspiciatis vero pariatur? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Qui ad aperiam exercitationem distinctio
          velit, commodi doloribus recusandae earum nihil, placeat, quod
          praesentium labore dicta?
        </p>
        <br />
        <abbr title="">
          Create stunning image with as much aslittle control as you like thanks
          to a choice of Basic and Creative modes.
        </abbr>
        <br />
        <br />
        <br />
        <br />
        <marquee loop="-1" scrollamount="5" width="100%" bgcolor="#ccc">
          create stunning image with as much aslittle control as you like thanks
          to a choice of Basic and Creative modes.
        </marquee>
      </div>
    </div>
  );
};

export default AboutHead;

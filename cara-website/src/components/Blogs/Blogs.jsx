import React from "react";
import style from "./Blogs.module.css";
import { blogImages } from "../../assets/asset";

const Blogs = () => {
  return (
    <div className={style.blog}>
      {blogImages.map((items, index) => {
        return (
          <div className={style.blogBox}>
            <div className={style.blogImg}>
              <img src={items} alt="" />
            </div>
            <div className={style.blogDetails}>
              <h4>The Cotton-Jersey zip-up Hoodie</h4>
              <p>
                Kickstarter man braid godard colorinf book. Racllete waistcoat
                selfies yr wolf chartreuse hexagon irony, godard...
              </p>
              <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;

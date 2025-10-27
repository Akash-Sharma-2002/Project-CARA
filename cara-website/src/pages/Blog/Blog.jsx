import React from "react";
import style from "./Blog.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className={style.pageHeader}>
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </div>
      <div className={style.blog}>
        <div class={style.blogBox}>
          <div class={style.blogImg}></div>
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
        <div class={style.blogBox}>
          <div class={style.blogImg}></div>
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
        <div class={style.blogBox}>
          <div class={style.blogImg}></div>
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
        <div class={style.blogBox}>
          <div class={style.blogImg}></div>
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
      </div>
      <Pagination />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;

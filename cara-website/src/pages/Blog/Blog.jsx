import React from "react";
import style from "./Blog.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import bGI from "../../../public/b19.jpg";
import Blogs from "../../components/Blogs/Blogs";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        h2="#readmore"
        p="Read all case studies about our products!"
        bGI={bGI}
      />
      <Blogs />
      <Pagination />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;

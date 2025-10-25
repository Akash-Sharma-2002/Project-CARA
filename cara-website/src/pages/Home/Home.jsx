import React from "react";
import style from "./home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Product from "../../components/Product/Product";
import Banner from "../../components/Banner/Banner";
import SmBanner from "../../components/Sm-Banner/SmBanner";
import Banner3 from "../../components/Banner3/Banner3";
import Footer from "../../components/Footer/Footer";
import { pro1, pro2 } from "../../assets/asset";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Product type="Featured Products" para="Summer Collection New Morden Design" products={pro1} />
      <Banner />
      <Product type="New Arrivals" para="Summer Collection New Morden Design" products={pro2} />
      <SmBanner />
      <Banner3 />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

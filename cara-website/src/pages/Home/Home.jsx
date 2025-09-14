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

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Product />
      <Banner />
      <Product />
      <SmBanner />
      <Banner3 />
      <Footer />
    </>
  );
};

export default Home;

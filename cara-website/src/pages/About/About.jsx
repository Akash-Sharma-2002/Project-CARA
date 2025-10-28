import React from "react";
import style from "./About.module.css";
import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import bGI from "../../../public/banner.png";
import Feature from "../../components/Feature/Feature";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import AboutHead from "../../components/AboutUs/AboutHead";
import AboutApp from "../../components/AboutUs/AboutApp";

const About = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        h2="#KnowUs"
        p="Lorem ipsum dolor sit amet consectetur"
        bGI={bGI}
      />
      <AboutHead />
      <AboutApp />
      <Feature />
      <Newsletter />
      <Footer />
    </>
  );
};

export default About;

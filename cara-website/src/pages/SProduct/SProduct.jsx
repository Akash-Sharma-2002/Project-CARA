import React, { useState } from "react";
import style from "./SProduct.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { shopPro } from "../../assets/asset";
import Product from "../../components/Product/Product";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import ProDetails from "../../components/ProDetails/ProDetails";

const SProduct = () => {
  return (
    <div className={style.sProduct}>
      <Navbar />
      <ProDetails />
      <Product
        type="Featured Products"
        para="Summer Collection New Morden Design"
        products={shopPro}
      />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SProduct;

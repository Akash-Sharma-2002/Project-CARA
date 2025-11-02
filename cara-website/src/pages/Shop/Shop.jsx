import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { pro } from "../../assets/asset";
import PageHeader from "../../components/PageHeader/PageHeader";
import Pagination from "../../components/Pagination/Pagination";
import SProduct from "../../pages/SProduct/SProduct";
import bGI from "../../../public/b1.jpg";

const Shop = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        h2="#stayhome"
        p="save more with coupons & upto 70% off!"
        bGI={bGI}
      />
      <Product products={pro} />
      <Pagination />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Shop;

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { pro } from "../../assets/asset";
import PageHeader from "../../components/PageHeader/PageHeader";
import Pagination from "../../components/Pagination/Pagination";

const Shop = () => {
  return (
    <>
      <Navbar />
      <PageHeader />
      <Product products={pro} />
      <Pagination />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Shop;

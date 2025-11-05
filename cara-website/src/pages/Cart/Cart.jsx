import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import bGI from "../../../public/banner.png";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        h2="#Cart"
        p="Add your fashion and stylings withot any limit.."
        bGI={bGI}
      />
      <Footer />
    </>
  );
};

export default Cart;

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import bGI from "../../../public/banner.png";
import Footer from "../../components/Footer/Footer";
import CartItems from "../../components/CartItems/CartItems";
import CartAdd from "../../components/CartItems/CartAdd";

const Cart = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        h2="#Cart"
        p="Add your fashion and stylings withot any limit.."
        bGI={bGI}
      />
      <CartItems />
      <CartAdd />
      <Footer />
    </>
  );
};

export default Cart;

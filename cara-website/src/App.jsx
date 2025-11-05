import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import { asset } from "./assets/asset";
import Shop from "./pages/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import SProduct from "./pages/SProduct/SProduct";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/SProduct" element={<SProduct />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;

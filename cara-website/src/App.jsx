import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import { asset } from "./assets/asset";
import Shop from "./pages/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import SProduct from "./pages/SProduct/SProduct";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/SProduct" element={<SProduct />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};

export default App;

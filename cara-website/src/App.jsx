import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import { asset } from "./assets/asset";
import Shop from "./pages/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import SProduct from "./pages/SProduct/SProduct";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/SProduct" element={<SProduct />} />
      </Routes>
    </>
  );
};

export default App;

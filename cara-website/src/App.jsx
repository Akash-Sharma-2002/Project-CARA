import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import { asset } from "./assets/asset";
import Shop from "./pages/Shop/Shop";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default App;

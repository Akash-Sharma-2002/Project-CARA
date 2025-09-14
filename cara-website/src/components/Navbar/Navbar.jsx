import React, { useState } from "react";
import style from "./navbar.module.css";
import { asset } from "../../assets/asset";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  function open() {
    setIsActive(true);
    console.log("func open");
  }

  function close() {
    setIsActive(false);
  }

  return (
    <div id={style.header}>
      <img src={asset.logo} alt="" />
      <div>
        <ul id={style.navbar} className={isActive ? style.active : ""}>
          <li>
            <a className={style.active} href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li id="lg-bag">
            <a href="#">
              <i className="far fa-shopping-bag"></i>
            </a>
          </li>
          <i id={style.close} className="far fa-times" onClick={close}></i>
        </ul>
      </div>
      <div id={style.mobile}>
        <a href="#">
          <i className="far fa-shopping-bag"></i>
        </a>
        <i className="fas fa-outdent" onClick={open}></i>
      </div>
    </div>
  );
};

export default Navbar;

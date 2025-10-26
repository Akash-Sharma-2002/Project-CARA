import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./navbar.module.css";
import { asset } from "../../assets/asset";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  function open() {
    setIsActive(true);
    console.log("func open");
  }

  function close() {
    setIsActive(false);
  }

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/Shop" },
    { name: "Blog", path: "/Blog" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <div id={style.header}>
      <img src={asset.logo} alt="" />
      <div>
        <ul id={style.navbar} className={isActive ? style.active : ""}>
          {links.map((link, index) => (
            <li
              key={index}
              className={location.pathname === link.path ? style.active : ""}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
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

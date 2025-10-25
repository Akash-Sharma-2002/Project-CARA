import React, { useState } from "react";
import style from "./navbar.module.css";
import { asset } from "../../assets/asset";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  function open() {
    setIsActive(true);
    console.log("func open");
  }

  function close() {
    setIsActive(false);
  }

  const links = ['Home', 'Shop', 'Blog', 'About', 'Contact'];

  return (
    <div id={style.header}>
      <img src={asset.logo} alt="" />
      <div>
        <ul id={style.navbar} className={isActive ? style.active : ""}>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className={activeLink === link ? style.active : ''}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </a>
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

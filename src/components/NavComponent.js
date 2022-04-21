import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./navbar.css";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">home</a>
    </p>
    <p>
      <a href="#about">about</a>
    </p>
    <p>
      <a href="#contact">contact</a>
    </p>
    <p>
      <a href="#services">services</a>
    </p>
    <p>
      <a href="#portfolio">portfolio</a>
    </p>
  </>
);

const NavComponent = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="container">
      <div className="links">
        <div className="links-logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="links-wrapper">
          <Menu />
        </div>
      </div>
      <div className="nav-button">
        <button type="button">Hire me</button>
      </div>
      <div className="nav-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#333333"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#333333"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nav-menu-wrapper">
            <div className="nav-menu-wrapper-links">
              <Menu />
              <div className="nav-menu-wrapper-button">
                <button type="button">Hire me</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavComponent;

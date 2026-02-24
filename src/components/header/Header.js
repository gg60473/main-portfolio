import React from "react";
import "./Header.css";
import {Fade} from "react-reveal";

function Header() {
  return (
    <Fade top duration={1000} distance="20px">
    <div>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> *</span>
          <span className="logo-name">Gaurav Kumar</span>
          <span className="grey-color">*</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#myprojects">Projects</a>
          </li>
          <li>
            <a href="#blogs">Certifications</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </div>
    </Fade>
  );
}
export default Header;

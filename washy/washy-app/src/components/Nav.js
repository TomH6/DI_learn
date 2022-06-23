import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/Nav.css';

const Nav = (props) => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
    return (
      <>
      <nav className="nav">
        <div className="nav__brand">
            <Link to='/' >WASHY</Link> 
        </div>
        <ul className={active}>
          <li className="nav__item">
            <Link to='home'>Home</Link> 
          </li>
          <li className="nav__item">
            <Link to='about'>About</Link>
          </li>
          <li className="nav__item">
            <Link to='contact'>Contact</Link>
          </li>
          <li className="nav__item">
            <Link to='log-in'>Log-in</Link>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      </>
    );
}
export default Nav;

import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar__left">
            <h1 className="logo"> <span>Its</span> Cafe </h1>
        </div>
        <div className="navbar__right">
            <ul className="menu">
                <li className="menu__item"> <Link to={"/"}>Home</Link> </li>
                <li className="menu__item"> <Link to={"/menu"}>Menu</Link> </li>
                <li className="menu__item"> <Link to={"/status"}>Order Status</Link> </li>
                <li className="menu__item"> <Link to={"/#contact"}>Contact Us</Link> </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo.png"

function Navbar({navlinks}) {
  return (
    <header className="flex items-center justify-center w-auto h-auto absolute top-0 left-0 right-0">
      <nav className="flex items-center justify-between traveler-container">
        <NavLink to={`/`} className="flex items-center">
          <img src={logo} alt="logo" className="w-22 h-9 object-fill" />
        </NavLink>
        <ul className="flex items-center lg:hidden gap-7">
         {navlinks?.map((elm,index)=> <li key={index}><NavLink className="text-lg text-slate-900"to={`#`}>{elm.link}</NavLink></li>) }
        </ul>
        <ul className="flex items-center lg:hidden">
          <li><button className="button-green px-7 text-base"type="button">Join Us</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

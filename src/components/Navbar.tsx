import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Navlinks } from "../types/types";

import logo from "../images/logo.png";
import menu from "../images/menu.svg";
import PopupMenu from "./PopupMenu";

type NavbarProps = {
  navlinks: Navlinks[];
};

function Navbar({ navlinks }: NavbarProps) {
  const [popupState, setPopupState] = useState(false);
  const onTriggerPopup = () => {
    setPopupState(!popupState);
  };
  return (
    <>
      <header className="flex items-center justify-center w-auto h-auto absolute top-7 left-0 right-0">
        <nav className="flex items-center justify-between traveler-container">
          <NavLink to={`/`} className="flex items-center">
            <img src={logo} alt="logo" className="w-22 h-9 object-fill" />
          </NavLink>
          <ul className="flex items-center lg:hidden gap-7">
            {navlinks?.map((elm, index) => (
              <li key={index}>
                <NavLink className="text-lg text-slate-900" to={`#`}>
                  {elm.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex items-center lg:hidden">
            <li>
              <button className="button-green px-7 text-base" type="button">
                Join Us
              </button>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center">
            <li>
              <button
                type="button"
                className="flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
                onClick={onTriggerPopup}
              >
                <img
                  className="object-cover shadown-sm filter"
                  src={menu}
                  alt="menu-icon"
                ></img>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopupMenu navlinks={navlinks} popupState={popupState} />
    </>
  );
}

export default Navbar;

import React from 'react'
import { NavLink } from "react-router-dom";
import { Navlinks } from '../types/types';

type PopupMenuProp = {
  navlinks : Navlinks [];
  popupState:boolean
}


function PopupMenu({navlinks, popupState}:PopupMenuProp) {
  return (
    <>
        <nav className={`fixed top-14 right-14 bg-white bg-opacity-70 opacity-100
         z-50 backdrop-blur-md backdrop-filter rounded-lg h-auto w-44 py-5 px-6 hidden lg:flex items-center justify-center transition-transform duration-300 ;
         ${popupState ? 'lg:showpopup':'lg:noshowpopup'}`}>
            <ul className='flex items-start flex-col gap-3'>
                {navlinks?.map((elm,index) => (
                    <li key={index}><NavLink className="text-lg text-slate-900" to={`#`}>
                {elm.link}
              </NavLink>
              </li>
                ))}
                <li>
              <button className="button-light sm:w-auto shadow-slate-300 rounded-lg" type="button">
                Join Us
              </button>
            </li>
            </ul>
        </nav>
    </>
  )
}

export default PopupMenu
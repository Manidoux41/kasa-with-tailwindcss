import React from "react";
import logo from "../assets/logo_kasa.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-2 flex justify-between items-center md:pt-10 md:px-24">
      <div className="logo w-36 md:w-52">
        <Link to="/">
          <img src={logo} alt="logo kasa" />
        </Link>
      </div>
      <ul className="text-red-500 font-normal flex justify-between gap-x-4 text-sm uppercase md:normal-case md:text-2xl md:gap-x-24">
        <li>
            <NavLink to='/'>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/about'>
                About
            </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

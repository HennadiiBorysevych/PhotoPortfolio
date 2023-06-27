import React from "react";

import Socials from "./Socials";
import MobileNav from "./MobileNav";
import Logo from "../img/header/logo.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-20 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"} className="max-w-[200px]">
          <img src={Logo} alt="logo" />
        </Link>
        <nav>
          <ul className="hidden lg:flex gap-x-12 font-semibold">
            <li>
              <Link
                to={"/"}
                className="text-[#696c6d] hover:text-primary transition"
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={"/about"}
                className="text-[#696c6d] hover:text-primary transition"
              >
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={"/portfolio"}
                className="text-[#696c6d] hover:text-primary transition"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="text-[#696c6d] hover:text-primary transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;

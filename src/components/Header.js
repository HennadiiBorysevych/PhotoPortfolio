import React, { useContext } from "react";
//import components
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import Logo from "../img/header/logo.svg";
//import Link
import { Link } from "react-router-dom";
// import context
import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-20 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={"/"}
          className="max-w-[200px]"
        >
          <img src={Logo} alt="logo" />
        </Link>
        {/* navigation-hidden//shown on desktop mode */}
        <nav>
          <ul
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="hidden lg:flex gap-x-12 font-semibold"
          >
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
      {/* cocials component */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;

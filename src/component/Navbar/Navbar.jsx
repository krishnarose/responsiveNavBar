import React, { useEffect, useState } from "react";
import logo from "../../assests/logo.png";
import { Link } from "react-router-dom";

import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = ({openNav}) => {

  const [navBg,setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <>
      <div className={`fixed ${navBg ? " bg-indigo-800" :"fixed" } w-full transition-all duration-200 h-[12vh] z-[1000] bg-blue-700`}>
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            width={200}
            height={80}
            className="rounded-xl"
          />
          {/* NavLinks */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link to={"/"}>
              <p className="nav__link">Home</p>
            </Link>
            <Link to={"/"}>
              <p className="nav__link">About</p>
            </Link>{" "}
            <Link to={"/"}>
              <p className="nav__link">Courses</p>
            </Link>{" "}
            <Link to={"/"}>
              <p className="nav__link">Testimonial</p>
            </Link>{" "}
            <Link to={"/"}>
              <p className="nav__link">Blog</p>
            </Link>{" "}
            <Link to={"/"}>
              <p className="nav__link">Contact</p>
            </Link>
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg">
              Signup Now
            </button>
            {/* Burger menu */}
            <AiOutlineMenuFold
            onClick={openNav}
             className="w-8 h-8 cursor-pointer text-white lg:hidden"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

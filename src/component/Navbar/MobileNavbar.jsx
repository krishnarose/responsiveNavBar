import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";


const MobileNavbar = ({closeNav,showNav}) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}
      <div className={`fixed ${navOpen} top-0 transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-full h-[100vh]`}/>
      <div className={`text-white  ${navOpen} fixed justify-center items-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 z-[10006]`}>
        <Link to={"/"}>
          <p className="nav__link text-[20px] mt-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">Home</p>
        </Link>
        <Link to={"/"}>
              <p className="nav__link  text-[20px] mt-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">About</p>
            </Link>{" "}
            <Link to={"/"}>
              <p className="nav__link text-[20px] mt-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">Courses</p>
            </Link>{" "}
            <Link to={"/"}>
              <p className="nav__link text-[20px] mt-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">Testimonial</p>
            </Link>{" "}
            <Link to={"/"}>
              <p className="nav__link text-[20px] mt-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">Blog</p>
            </Link>{" "}
            <Link to={"/"}>
              <p className="nav__link text-[20px] mt-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">Contact</p>
            </Link>
            {/* closed button */}
            <IoMdClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:h-8 w-6 h-6 text-white sm:text-[30px]" />

      </div>
    </div>
  );
};

export default MobileNavbar;

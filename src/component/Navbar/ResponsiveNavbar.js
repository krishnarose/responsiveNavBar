import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false)

  const showNavHandler = () => setShowNav(true)
  const hideNavHandler = () => setShowNav(false)

  return (
    <div>
      <Navbar openNav={showNavHandler}/>
      <MobileNavbar showNav={showNav} closeNav={hideNavHandler} />
    </div>
  );
};

export default ResponsiveNavbar;

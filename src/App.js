import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import PageNotFound from './PageNotFound';
import { Toaster } from "react-hot-toast";
import ResponsiveNavbar from './component/Navbar/ResponsiveNavbar';

const App = () => {
  return (
    <>
      <Toaster 
       position="bottom-center"
       reverseOrder={false}/>
      <BrowserRouter>
        {/* <Nav /> */}
        <ResponsiveNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

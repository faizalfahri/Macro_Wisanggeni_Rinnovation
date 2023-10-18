import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../Navbar/NavbarComponent";
// import FooterComponent from "./components/client/Footer/FooterComponent";

const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      // {/* <FooterComponent /> */}
    </>
  );
};

export default Layout;

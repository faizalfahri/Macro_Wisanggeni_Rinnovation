import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Layout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default Layout;

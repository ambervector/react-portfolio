import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "../Navbar/MainNavigation";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <>
      <MainNavigation />
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

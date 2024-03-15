import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "../components/UI/MainNavigation";

const Root = () => {
  return (
    <>
      <MainNavigation />
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
};

export default Root;

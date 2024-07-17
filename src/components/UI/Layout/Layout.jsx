import React, { useState } from "react";
import { Outlet } from "react-router";
import MainNavigation from "../Navbar/MainNavigation";
import Footer from "../Footer/Footer";

const Root = () => {
  const [mode, setMode] = useState("dark");

  return (
    <>
      <MainNavigation setMode={setMode} mode={mode} />
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

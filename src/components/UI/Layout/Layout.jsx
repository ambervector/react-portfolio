import React, { useState } from "react";
import { Outlet } from "react-router";
import MainNavigation from "../Navbar/MainNavigation";
import Footer from "../Footer/Footer";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import { CssBaseline } from "@mui/material";

const Root = () => {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <MainNavigation setMode={setMode} mode={mode} />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Root;

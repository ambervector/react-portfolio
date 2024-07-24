import React, { useState } from "react";
import { Outlet } from "react-router";
import MainNavigation from "../Navbar/MainNavigation";
import Footer from "../Footer/Footer";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import { CssBaseline } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import zIndex from "@mui/material/styles/zIndex";

const Root = () => {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  useGSAP(() => {
    gsap.to("#animationBox", {
      borderRadius: 0,
      x: window.innerWidth,
      y: window.innerHeight,
      z: -1,
      rotation: 360,
      duration: 4,
      repeat: -10,
      yoyo: true,
      scale: 1.5,
      ease: "back.in",
    });
  }, []);

  useGSAP(() => {
    gsap.to("#animationBox1", {
      top: window.innerHeight,
      left: 0,

      z: -10,
      rotation: 360,
      delay: 0.5,
      duration: 8,
      repeat: -10,
      yoyo: true,
      scale: 1.5,
      ease: "back.in",
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <MainNavigation setMode={setMode} mode={mode} />
        <Box
          id="animationBox"
          sx={{
            position: "fixed",
            zIndex: -5,
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            borderRadius: "50px",
            backgroundColor: "#1d1b1b",
            boxShadow: "20px 20px 60px #e8e8e8, -20px -20px 60px #e8e8e8",
          }}
        ></Box>
        <Outlet />
        <Box
          id="animationBox1"
          sx={{
            position: "fixed",
            zIndex: -5,
            top: 0,
            left: 1150,
            width: 150,
            height: 150,
            borderRadius: "5px",
            backgroundColor: "#1d1b1b",
            boxShadow: "20px 20px 60px #e8e8e8, -20px -20px 60px #e8e8e8",
          }}
        ></Box>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Root;

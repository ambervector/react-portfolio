import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import classes from "./MainNavigation.module.css";
import "./MainNavigation.module.css";
import { useSpring, animated } from "react-spring";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Switch } from "@mui/material";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import SmallMenu from "../SmallMenu/SmallMenu";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MainNavigation = ({ setMode, mode }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen((prevState) => !prevState);
  };

  const scaleChange = useSpring({
    from: { opacity: "0", marginTop: "-200px" },
    to: { opacity: "1", marginTop: "0px" },
    config: { duration: 1500 },
  });

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#000000",
          background: "transparent",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ paddingTop: "2rem" }}>
            <animated.header style={scaleChange}>
              <Box className={classes.logo}>
                <Link to="/">
                  <span id="logo"> Amber. </span>
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                p={5}
              >
                {mode === "dark" ? (
                  <BedtimeIcon sx={{ color: "white" }} />
                ) : (
                  <LightModeIcon />
                )}

                <Switch
                  onChange={(e) => setMode(mode === "dark" ? "light" : "dark")}
                />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  // paddingRight: "5rem",
                  color: "red",
                  justifyContent: "flex-end",
                }}
              >
                <MenuIcon
                  onClick={handleClose}
                  sx={{ width: "100px", height: "30px" }}
                />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                <nav style={{ width: "100%" }}>
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? classes.active : undefined
                        }
                        end
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? classes.active : undefined
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                          isActive ? classes.active : undefined
                        }
                      >
                        Projects
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          isActive ? classes.active : undefined
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </Box>
              <SmallMenu open={open} handleClose={handleClose} />
            </animated.header>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default MainNavigation;

import { AppBar, IconButton, Switch, Toolbar, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useColorScheme } from "@mui/material/styles";
import NavigationBar from "../components/navbar/NavigationBar";

import UserUi from "../components/users/UserProfile";
import logo from "../../assets/react.svg";
import { Box, display, useMediaQuery } from "@mui/system";
import React from "react";
import Drawer from "../components/navbar/Drawer";

const routes = [
  { name: "Home", link: "/", activeIndex: 0 },
  { name: "Product", link: "/product", activeIndex: 1 },
  { name: "Customer", link: "/customer", activeIndex: 2 },
  { name: "Invoices", link: "/", activeIndex: 3 },
  { name: "Quotation", link: "/", activeIndex: 4 },
  { name: "About", link: "/about", activeIndex: 5 },
];

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Switch
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Switch>
  );
}

function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <AppBar
        sx={{
          color: "primary",
          position: "sticky",
          borderRadius: "8px 8px 0px 0px ",
        }}
      >
        <Toolbar variant="regular" sx={{ ...theme.mixins.toolbar }}>
          {/* <Box> */}
          {matches ? (
            <Box>
              <Drawer routes={routes} />
              <IconButton
                component={Link}
                to="/"
                sx={{ marginRight: "auto", display: "none" }}
              >
                <img src={logo} alt="TMT Innovative Logo" />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{display:'flex'}}>
              <IconButton
                component={Link}
                to="/"
                sx={{ marginRight: "auto" }}
              >
                <img src={logo} alt="TMT Innovative Logo" />
              </IconButton>
              <NavigationBar routes={routes} />
            </Box>
          )}
          {/* </Box> */}
          <Box sx={{ display: "inline-flex", marginLeft: "auto" }}>
            <ModeToggle />
            <UserUi />
          </Box>
        </Toolbar>
      </AppBar>
      <div></div>
    </React.Fragment>
  );
}

export default Header;

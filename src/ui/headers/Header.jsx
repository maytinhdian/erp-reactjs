import { AppBar, IconButton, Switch, Toolbar, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useColorScheme } from "@mui/material/styles";
import NavigationBar from "../components/navbar/NavigationBar";

import UserUi from "../components/UserUi";
import logo from "../../assets/react.svg";
import { Box } from "@mui/system";
import React from "react";

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
          <IconButton component={Link} to="/" sx={{ marginRight: "auto" }}>
            <img src={logo} alt="TMT Innovative Logo" />
          </IconButton>
          <Box>
            <NavigationBar />
          </Box>
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

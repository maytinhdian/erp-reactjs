import { AppBar, IconButton, Switch, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { useColorScheme } from "@mui/material/styles";

import NavigationBar from "../components/NavigationBar";
import UserUi from "../components/UserUi";
import logo from "../../assets/react.svg";
import { Box } from "@mui/system";

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
  return (
    <AppBar color="primary">
      <Toolbar variant="regular" sx={{ justifyContent: "space-between" }}>
        <IconButton component={Link} to="/">
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
  );
}

export default Header;

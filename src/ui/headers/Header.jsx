import { AppBar, Button, Stack, Switch, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
import UserUi from "../components/UserUi";
import logo from "../../assets/react.svg";

function Header() {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Button component={Link} to="/">
          <img src={logo} alt="TMT Innovative Logo" />
        </Button>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end" width="100vw">
          <div/>
          <NavigationBar />
          <Switch inputProps={{"aria-label":"controlled"}}/>
          <UserUi />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

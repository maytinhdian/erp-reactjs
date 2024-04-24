import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
import UserUi from "../components/UserUi";
import logo from "../../assets/react.svg"

function Header() {
  return (
    <AppBar color="primary">
      <Toolbar>
      <Button
              component={Link}
              to="/"
              disableRipple
             
            >
              <img
               
                src={logo}
                alt="TMT Innovative Logo"
              />
            </Button>
        <NavigationBar />
        <UserUi/>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

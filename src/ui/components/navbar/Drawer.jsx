import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { MenuSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";

Drawer.propTypes = {
  routes: PropTypes.object.isRequired,
};

function Drawer(props) {
  const routes = props.routes;
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <SwipeableDrawer
        // disableBackdropTransition={!iOS}
        // disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              component={Link}
              to={route.link}
            >
              <ListItemText disableTypography>{route.name}</ListItemText>
            </ListItem>
          ))}
        </List>
        <div />
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuSharp />
      </IconButton>
    </React.Fragment>
  );
}

export default Drawer;

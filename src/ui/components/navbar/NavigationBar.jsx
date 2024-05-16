import PropTypes from 'prop-types';
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function a11yProps(index) {
  return {
    id: "simple-tab-" + index,
    "aria-controls": "simple-tabpanel-" + index,
  };
}

NavigationBar.propTypes = {
  routes: PropTypes.array.isRequired
};

function NavigationBar(props) {
  const routes = props.routes;
  const [selected, setSelected] = useState(0);
  return (
    <Tabs
      aria-label="Main Navigation"
      value={selected}
      onChange={(_e, newValue) => setSelected(newValue)}
    >
      {routes.map((route, index) => (
        <Tab
          {...a11yProps(index)}
          key={`${route}${index}`}
          component={Link}
          to={route.link}
          label={route.name}
        />
      ))}
    </Tabs>
  );
}

export default NavigationBar;
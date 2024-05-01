import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const routes = [
  { name: "Home", link: "/", activeIndex: 0 },
  { name: "Product", link: "/product", activeIndex: 1 },
  { name: "Customer", link: "/customer", activeIndex: 2 },
  { name: "Invoices", link: "/", activeIndex: 3 },
  { name: "Quotation", link: "/", activeIndex: 4 },
  { name: "About", link: "/about", activeIndex: 5 },
];

function a11yProps(index) {
  return {
    id: "simple-tab-" + index,
    "aria-controls": "simple-tabpanel-" + index,
  };
}

function NavigationBar() {
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

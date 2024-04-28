import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const routes = [
  { name: "Home", link: "/", activeIndex: 0 },
  { name: "Product", link: "/product", activeIndex: 0 },
  { name: "Customer", link: "/", activeIndex: 0 },
  { name: "Invoices", link: "/", activeIndex: 0 },
  { name: "Quotation", link: "/", activeIndex: 0 },
  { name: "About", link: "/about", activeIndex: 3 },
];

function NavigationBar() {
  const [selected, setSelected] = useState(0);
  return (
    <Tabs
      value={selected}
      onChange={(_e, newValue) => setSelected(newValue)}
    >
          {routes.map((route, index) => (
          <Tab
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

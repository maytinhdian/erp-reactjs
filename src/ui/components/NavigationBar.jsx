import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

const routes = ["Home", "Store", "About Us", "Contact Us"];

function NavigationBar(props) {
  const [selected, setSelected] = useState(0);
  return (
    <Tabs
      centered
      sx={{ width: "100%" }}
      value={selected}
      onChange={(_e, newValue) => setSelected(newValue)}
    >
      {routes.map((route) => (
        <Tab
          label={route}
          key={route}
          sx={{
            color: "white",
           
          }}
        />
      ))}
    </Tabs>
  );
}

export default NavigationBar;

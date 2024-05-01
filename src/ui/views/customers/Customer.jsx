import { Add, FilterAltRounded, TextSnippetTwoTone } from "@mui/icons-material";
import { Button, Divider, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import CustomTable from "../../components/customer/CustomerTable";
import AddCustomer from "../../components/customer/AddCustomer";
function Customer(props) {
  const [addCustomer, setAddCustomer] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setAddCustomer(!addCustomer);
    console.log("The link was clicked." + addCustomer);
  };
  return (
    <Box>
      <Paper sx={{ bgcolor: "primary.dark", borderRadius: 0 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={handleClick}
            sx={{ mt: 1, ml: 1 }}
            variant="contained"
          >
            <Add />
          </Button>
          <Box sx={{ mt: 1, ml: 1, mr: 1 }}>
            <Button variant="contained" sx={{ mr: 1 }}>
              <FilterAltRounded /> Filters
            </Button>
            <Button variant="contained">
              <TextSnippetTwoTone />
              Export CSV
            </Button>
          </Box>
        </Box>
        <Box sx={{ m: 1, paddingBottom: 1 }}>
          <Paper>{addCustomer ? <AddCustomer /> : <CustomTable />}</Paper>
        </Box>
      </Paper>
    </Box>
  );
}

export default Customer;

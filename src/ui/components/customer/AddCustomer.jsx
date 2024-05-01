import React from "react";
import PropTypes from "prop-types";
import { Box, padding } from "@mui/system";
import { Button, Stack, TextField } from "@mui/material";

AddCustomer.propTypes = {};

function AddCustomer(props) {
  return (
    <Box>
      <Stack
        sx={{
            gap:'2',
          flexDirection: "row",
          display: "flex",
        //   justifyContent: "space-between",
        }}
      >
        <TextField
        //   sx={{ margin: (theme) => theme.spacing(1) }}
          id="first-name"
          label="First Name"
          variant="outlined"
        />
        <TextField
        //   sx={{ margin: (theme) => theme.spacing(1) }}
          id="last-name"
          label="Last Name"
          variant="outlined"
        />
        <TextField
        //   sx={{ margin: (theme) => theme.spacing(1),flexGrow: 1}}
          id="email"
          label="Email"
          variant="outlined"
        />
      </Stack>
      <TextField
          sx={{ padding: (theme) => theme.spacing(1)} }
          id="address"
          label="Address"
          variant="outlined"
          fullWidth multiline minRows={4}
        />
         <TextField
          sx={{ padding: (theme) => theme.spacing(1),flexGrow: 1}}
          id="cellphone"
          label="Mobile phone"
          variant="outlined"
          fullWidth
        />
         <TextField
          sx={{ padding: (theme) => theme.spacing(1),flexGrow: 1}}
          id="zalo"
          label="Zalo"
          variant="outlined"
          fullWidth
        />
        <Stack flexDirection='row' justifyContent='center'>
            <Button  sx={{ margin: (theme) => theme.spacing()}} variant="contained">SAVE</Button>
            <Button  sx={{ margin: (theme) => theme.spacing(1)}} variant="contained">NEW</Button>
            <Button  sx={{ margin: (theme) => theme.spacing(1)}} variant="contained">CaNCEL</Button>
        </Stack>
    </Box>
  );
}

export default AddCustomer;

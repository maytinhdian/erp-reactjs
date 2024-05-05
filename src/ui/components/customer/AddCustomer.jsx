import React from "react";
import PropTypes from "prop-types";
import { Box, padding } from "@mui/system";
import { Button, Grid, Stack, TextField } from "@mui/material";
import theme from "../../themes/Theme";

AddCustomer.propTypes = {};

function AddCustomer(props) {
  return (
    // <Box>
    //   <Stack
    //     sx={{
    //         gap:'2',
    //       flexDirection: "row",
    //       display: "flex",
    //       justifyContent: "space-around",
    //     }}
    //   >
    //     <TextField
    //       sx={{ margin: (theme) => theme.spacing(1) }}
    //       id="first-name"
    //       label="First Name"
    //       variant="outlined"
    //     />
    //     <TextField
    //       sx={{ margin: (theme) => theme.spacing(1) }}
    //       id="last-name"
    //       label="Last Name"
    //       variant="outlined"
    //     />
    //     <TextField
    //       sx={{ margin: (theme) => theme.spacing(1),flexGrow: 1}}
    //       id="email"
    //       label="Email"
    //       variant="outlined"
    //     />
    //   </Stack>
    //   <TextField
    //       sx={{ padding: (theme) => theme.spacing(1)} }
    //       id="address"
    //       label="Address"
    //       variant="outlined"
    //       fullWidth multiline minRows={4}
    //     />
    //      <TextField
    //       sx={{ padding: (theme) => theme.spacing(1),flexGrow: 1}}
    //       id="cellphone"
    //       label="Mobile phone"
    //       variant="outlined"
    //       fullWidth
    //     />
    //      <TextField
    //       sx={{ padding: (theme) => theme.spacing(1),flexGrow: 1}}
    //       id="zalo"
    //       label="Zalo"
    //       variant="outlined"
    //       fullWidth
    //     />
    //     <Stack flexDirection='row' justifyContent='center'>
    //         <Button  sx={{ margin: (theme) => theme.spacing()}} variant="contained">SAVE</Button>
    //         <Button  sx={{ margin: (theme) => theme.spacing(1)}} variant="contained">NEW</Button>
    //         <Button  sx={{ margin: (theme) => theme.spacing(1)}} variant="contained">CaNCEL</Button>
    //     </Stack>
    // </Box>
    <Grid container width="100%" gap={theme.spacing(1)} padding={theme.spacing(1)}>
      <Grid item>
        <TextField
          // sx={{ margin: (theme) => theme.spacing(1) }}
          id="first-name"
          label="First Name"
          variant="outlined"
          xs
        />
      </Grid>
      <Grid item>
        <TextField
          // sx={{ margin: (theme) => theme.spacing(1) }}
          id="first-name"
          label="Last Name"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField
          // sx={{ margin: (theme) => theme.spacing(1) }}
          id="first-name"
          label="Email Name"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField
          // sx={{ margin: (theme) => theme.spacing(1) }}
          id="first-name"
          label="Note Name"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}

export default AddCustomer;

// import React from "react";

import { LocationCityRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Outlet } from "react-router-dom";

function guestLayout() {
  return (
    <Container>
      <Box align="center">
        <Avatar>
          <LocationCityRounded />
        </Avatar>
        <h2>TMT Innovative Solutions</h2>
      </Box>
      <Outlet />
    </Container>
  );
}

export default guestLayout;

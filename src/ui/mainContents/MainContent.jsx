// import React from "react";
import { Box, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <Box component="main" flexGrow={1} mt={2} bgcolor="coral">
      <Typography variant="h1" textAlign='center'>Main contents</Typography>

      <Outlet />
    </Box>
  );
}

export default MainContent;

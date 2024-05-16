
import { Toolbar } from "@mui/material";
import {  Stack } from "@mui/system";
import React from "react";

function About(props) {
  return (
    <Toolbar>
      <Stack
        color="black"
        direction="row"
        // display="flex"
        spacing={2}
        // justifyContent="space-between"
        width={1}
      >
        <div style={{display:"flex",backgroundColor:"blue"}}>Div 1</div>
        <div>Div 2</div>
        <div>Div 3</div>
        
      </Stack>
    </Toolbar>
  );
}

export default About;

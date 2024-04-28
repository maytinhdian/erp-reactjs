import { Box, Button, Typography } from "@mui/material";

import { Outlet } from "react-router-dom";

function MainContent() {
  // const [activated, setActivated] = React.useState(false);
  return (
    <Box component="main">
      {/* <Typography variant="h1">Main contents</Typography> */}
      <Outlet />
      {/* <Button
        onClick={() => setActivated(!activated)}
        sx={{
          bgcolor: activated ? "secondary.light" : "primary",
          "&:hover": { backgroundColor: "secondary.main",color:"yellow" },
        }}
        variant="contained"
      >
        Thanks you
      </Button> */}
    </Box>
  );
}

export default MainContent;

import { Box, styled } from "@mui/material";
import { unstable_styleFunctionSx } from "@mui/system";
import { Outlet } from "react-router-dom";

const MainContentBox = styled("div")(unstable_styleFunctionSx);
function MainContent() {
  // const [activated, setActivated] = React.useState(false);
  return (
    <Box component="main">
      <Outlet />
    </Box>
  );
}

export default MainContent;

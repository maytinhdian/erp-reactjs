import { styled } from "@mui/material";
import { unstable_styleFunctionSx } from "@mui/system";
import { Outlet } from "react-router-dom";

const MainContentBox = styled("Box")(unstable_styleFunctionSx);
function MainContent() {
  // const [activated, setActivated] = React.useState(false);
  return (
    <MainContentBox component="main" sx={{minHeight:'80vh',bgcolor:'grey.300'}}>
      <Outlet />
    </MainContentBox>
  );
}

export default MainContent;

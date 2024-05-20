import { Box, styled, useTheme } from "@mui/material";
import { unstable_styleFunctionSx } from "@mui/system";
import { Outlet } from "react-router-dom";

const MainContentBox = styled(Box)(unstable_styleFunctionSx);
function MainContent() {
  const {
    mixins: { toolbar },
  } = useTheme();
  // const [activated, setActivated] = React.useState(false);
  return (
    <MainContentBox
      component="main"
      sx={{
        display: "flex",
        height: `calc(100vh - (${toolbar?.minHeight}px )*2.5)`,
        justifyContent: "start",
        alignItems: "start",
        bgcolor: (theme) => theme.palette.background.paper,
        border: (theme) => theme.shape.borderRadius * 0.25,
        my: (theme) => theme.spacing(0.5),
      }}
    >
      <Outlet />
    </MainContentBox>
  );
}

export default MainContent;

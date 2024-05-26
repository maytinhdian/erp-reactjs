import { Box, Grid, Paper, Typography, styled, useTheme } from "@mui/material";
import TmtTextField from "../components/core/TmtTextField";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

const theme = useTheme;

function About(props) {
  return (
    <Grid
      container
      padding={2}
      spacing={2}
      // justify="center"
      sx={{ width: "100%" }}
      alignItems="flex-start"
    >
      <Grid item >
        <TmtTextField label="test"></TmtTextField>
      </Grid>
      <Grid item>
        <TmtTextField label="test"></TmtTextField>
      </Grid>
      <Grid item>
        <TmtTextField label="test"></TmtTextField>
      </Grid>
      <Grid item>
        <TmtTextField label="test"></TmtTextField>
      </Grid>
      <Grid item>
        <TmtTextField label="test"></TmtTextField>
      </Grid>
    </Grid>
  );
}

export default About;

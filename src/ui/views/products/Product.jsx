import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import TextField from "../../components/core/TmtTextField";
import TmtTextField from "../../components/core/TmtTextField";
function Product() {
  const isFullWidth = useMediaQuery((theme) => theme.breakpoints.only("sm"));
  return (
    <Grid
      container
      padding={1}
      spacing={2}
      direction={{ xs: "column", lg: "row" }}
      justifyContent={{ xs: "center", lg: "left" }}
      alignItems="flex-start"
    >
      <Grid item xs={12} md={6} lg={4}>
        <TmtTextField label="Tên sản phẩm" />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TmtTextField label="Tên sản phẩm" />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TmtTextField label="Tên sản phẩm" />
      </Grid>
      <Grid item xs={12} md={6} lg={4} >
        <Button fullWidth={true} variant="contained">
          Save
        </Button>
      </Grid>
    </Grid>
  );
}

export default Product;

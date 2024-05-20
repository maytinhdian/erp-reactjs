import { Grid, Typography } from "@mui/material";
import TextField from "../../components/core/TmtTextField"
function Product() {
  return (
    <Grid
      container
      columns={{ lg: 12, sm: 6, xs: 3 }}
      justifyContent="start"
      alignItems="center"
      // spacing={1}
      m={1}
      boxSizing="border-box"
      // border="1px solid "
      borderRadius="5px"
      sx={{ gap: (theme) => theme.spacing(2) }}
    >
      <Grid item xs={12}>
        <Typography
          textAlign="center"
          textTransform="uppercase"
          sx={{ color: (theme) => theme.palette.text.secondary }}
          variant="h5"
        >
          Product Management
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField label="Product Name"/>
      </Grid>
      <Grid item xs={4}>
        <Typography
          textAlign="start"
          // textTransform="uppercase"
          sx={{ color: (theme) => theme.palette.text.secondary }}
          variant="h6"
        >
          Product Management
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          textAlign="start"
          // textTransform="uppercase"
          sx={{ color: (theme) => theme.palette.text.secondary }}
          variant="h6"
        >
          Product Management
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Product;

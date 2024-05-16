import {
  Autocomplete,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  Paper,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Product() {
  // const theme = useTheme();
  return (
    <Box
      sx={{
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        height: 1,
        width: 1,
        // padding: theme.spacing(1),
        boxSizing: "content-box",
      }}
    >
      <form>
        <Paper elevation={4} height="500px">
          <Typography variant="h6">Product Management</Typography>
          {/* <Box sx={{gap:3}}>
              <FormLabel component="legend">Product Detail</FormLabel>
            <FormControl component="fieldset" variant="standard">
              <TextField
                id="standard-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Box> */}
          <Grid
            container
            columns={{ lg: 12, sm: 6, xs: 3 }}
            // sx={{ height: "5rem" }}
            justifyContent="center"
            alignItems="center"
            spacing={1}
            py={1}
            // m={1}
            boxSizing="border-box"
          >
            <Grid item xs={4}>
              <FormControl>
                <FormLabel htmlFor="my-input">Nhóm sản phẩm</FormLabel>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params}  />
                  )}
                  size="small"
                />
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  placeholder="Product name"
                />
                <FormHelperText id="my-helper-text">
                  We'll never share your email.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <Stack flexDirection="row" alignItems="center" gap={1}>
                <Typography>Products</Typography>
                <TextField id="product-name" size="small" />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack flexDirection="row" alignItems="center" gap={1}>
                <Typography>Products</Typography>
                <TextField id="product-name" size="small" />
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={12}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Box>
  );
}

export default Product;

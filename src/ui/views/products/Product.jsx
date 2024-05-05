import { Label } from "@mui/icons-material";
import {
  Box,
  Card,
  Divider,
  Grid,
  Stack,
  Table,
  TextField,
  Typography,
} from "@mui/material";
import { width } from "@mui/system";

function Product() {
  return (
    <Box>
      <Stack>
        <Typography variant="h6">Product Managed</Typography>
      </Stack>
      <Divider sx={{ border: 0.5 }} />
      <Card
        sx={{
          width: "50%",
          alignItems: "center",
          padding: 1,
          flexDirection: "row",
          border:'4px',
          borderColor:'red',
          m:'8px'
        }}
      >
        <Stack flexDirection="row" gap={2} sx={{ width: "100%" , alignItems:'center' }}>
          <label style={{ minWidth: "100px", textAlign: "center" , fontWeight:"bold" }}>
            Full Name
          </label>
          <Stack>
            <TextField style={{ minWidth: "200px" }} id="firstName">
              First Name
            </TextField>
            <label htmlFor="firstName">first name</label>
          </Stack>
          <Stack>
            <TextField id="lastName" >Last Name</TextField>
            <label htmlFor="lastName" >last name</label>
          </Stack>
        </Stack>
      
      </Card>
    </Box>
  );
}

export default Product;

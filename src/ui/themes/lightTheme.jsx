import { createTheme } from "@mui/material";
import {purple,green}  from "@mui/material/colors";

const LightTheme = createTheme({
    palette: {
        mode:'light',
        primary: {
          main: purple[700],
        },
        secondary:{
          main: green[500]
        }
      },
});

export default LightTheme;
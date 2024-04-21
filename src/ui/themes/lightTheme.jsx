import { createTheme } from "@mui/material";
import {purple}  from "@mui/material/colors";

const LightTheme = createTheme({
    palette: {
        mode:'light',
        primary: {
          main: purple[700],
        },
      },
});

export default LightTheme;
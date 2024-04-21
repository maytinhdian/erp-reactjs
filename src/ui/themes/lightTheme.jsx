import { createTheme } from "@mui/material";
import {purple}  from "@mui/material/colors";

const LightTheme = createTheme({
    palette: {
        mode:'light',
        primary: {
          main: purple[500],
        },
      },
});

export default LightTheme;
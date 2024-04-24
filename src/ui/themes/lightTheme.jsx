import { createTheme } from "@mui/material";


const tmtBlue = "#c04e46";
const tmtOrange = "#baff60";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    common:{
      blue: `${tmtBlue}`,
      orange:`${tmtOrange}`
    },
    primary: {
      main: tmtBlue,
    },
    secondary: {
      main: tmtOrange,
    },
  },

  typography: {
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      fontFamily: "Roboto",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: tmtBlue,
            color: tmtOrange,
            borderRadius: "15px",
          },
        },
      },
    },
  },
});

export default LightTheme;

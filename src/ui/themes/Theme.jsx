import { createTheme } from "@mui/material";

const tmtLightBlue = "#218dbe";
const tmtLightOrange = "#d3e956";

const tmtDarkBlue = "#04061a";
const tmtDarkOrange = "#5e4a15";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    common: {
      blue: `${tmtLightBlue}`,
      orange: `${tmtLightOrange}`,
    },
    primary: {
      main: tmtLightBlue,
    },
    secondary: {
      main: tmtLightOrange,
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
            backgroundColor: tmtLightBlue,
            color: tmtLightOrange,
            borderRadius: "15px",
          },
        },
      },
    },
  },
});

export default LightTheme;

const DarkTheme = createTheme({
  palette: {
    mode: "light",
    common: {
      blue: `${tmtDarkBlue}`,
      orange: `${tmtDarkOrange}`,
    },
    primary: {
      main: tmtDarkBlue,
    },
    secondary: {
      main: tmtDarkOrange,
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
            backgroundColor: tmtDarkBlue,
            color: tmtDarkOrange,
            borderRadius: "15px",
          },
        },
      },
    },
  },
});

import { experimental_extendTheme as extendTheme } from "@mui/material/styles";


const tmtLightBlue = "#2196f3";
const tmtLightYellow = "#e91e63";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: `${tmtLightBlue}`,
        },
        secondary: {
          main: `${tmtLightYellow}`,
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#ddc227",
        },
        text: {
          primary: "#aa2727",
        },
      },
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: ({ theme }) => {
          return {
            backgroundColor: theme.palette.secondary.main,
          };
        },
        // indicator: ({ theme }) => ({
        //   backgroundColor: theme.palette.secondary.main,
        // }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#ffffff",
          },
          "&:not(.Mui-selected)": {
            color: "#e0d3d3",
          },
          textTransform: "none",
          fontSize: "1.1rem",
        },
      },
    },
  },
});

export default theme;

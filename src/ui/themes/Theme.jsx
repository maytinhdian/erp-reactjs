import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const tmtLightBlue = "#0b1269";
const tmtLightYellow = "#d4c819a6f";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        common: {
          black: "#111",
          white: "#FFF",
        },
        primary: {
          main: `${tmtLightBlue}`,
        },
        secondary: {
          main: `${tmtLightYellow}`,
        },
        text: {
          primary: "#FFF",
        },
      },
      typography: {
        allVariants: {
          fontFamily: "'Montserrat', sans-serif",
          textTransform: "none",
        },
        button: {
          textTransform: "none",
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
});

export default theme;

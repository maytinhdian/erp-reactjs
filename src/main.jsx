import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import Theme from "./ui/themes/Theme.jsx";
import Router from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssVarsProvider theme={Theme}>
      <CssBaseline />
      <Router />
    </CssVarsProvider>
  </React.StrictMode>
);

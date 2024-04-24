import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LightTheme from "./ui/themes/lightTheme.jsx";
import Router from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);

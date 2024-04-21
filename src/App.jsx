// import * as React from "react";

import DefaultLayout from "./ui/layouts/defaultLayout";

// import "./App.css";
import { Container } from "@mui/material";
function App() {
  return (
    <Container maxWidth="lg" sx={{bgcolor:"",display:'flex', flexDirection:"column" , minHeight:'100vh'}}>
      <DefaultLayout />
    </Container>
  );
}
export default App;

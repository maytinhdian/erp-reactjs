import Header from "../headers/Header";
import Footer from "../footers/Footer";
import MainContent from "../mainContents/MainContent";
import { Container } from "@mui/material";
import { minHeight } from "@mui/system";

function defaultLayout() {
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <MainContent/>
      <Footer />
    </Container>
  );
}

export default defaultLayout;

import Header from "../headers/Header";
import Footer from "../footers/Footer";
import MainContent from "../mainContents/MainContent";
import { Container } from "@mui/material";

function defaultLayout() {
  return (
    <Container disableGutters sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <MainContent />
      <Footer />
    </Container>
  );
}

export default defaultLayout;

import Header from "../headers/Header";
import Footer from "../footers/Footer";
import MainContent from "../mainContents/MainContent";


function defaultLayout() {
  return (
    <>
      <Header />
      <div style={{height:"70px"}}/>
      Default Layout
      <MainContent />
      <Footer />
    </>
  );
}

export default defaultLayout;

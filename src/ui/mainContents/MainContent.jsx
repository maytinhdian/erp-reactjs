import React from "react";
import { Outlet } from "react-router-dom";

function MainContent(props) {
  return (
    <>
      <h1>Main Contents</h1>
      <Outlet />
    </>
  );
}

export default MainContent;

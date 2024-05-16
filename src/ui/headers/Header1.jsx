import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const TmtHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.grey[900],
  padding: theme.spacing(2),
  textAlign: "center",
  ...theme.typography.h6,
  "@media (min-width:640px)": {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.grey[100],
  },

  /* here, we are accessing breakpoints' value from the theme */

  [`@media screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.grey[900],
  },
}));

function Header1(props) {
  return <TmtHeader>Header </TmtHeader>;
}

export default Header1;

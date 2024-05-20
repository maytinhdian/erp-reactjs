import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  InputLabel,
  TextField,
  styled,
  useThemeProps,
} from "@mui/material";
import { boxSizing, maxWidth, width } from "@mui/system";

const TextFieldRoot = styled(Box, {
  name: "TmtTextField",
  slot: "root",
})(({ theme, ownerState }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    // padding: theme.spacing(1),
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "start",
    // padding: theme.spacing(0.5),
  },
  gap: theme.spacing(0.5),

  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  // boxShadow: theme.shadows[2],
  // letterSpacing: "-0.025em",

  ...(ownerState.variant === "outlined" && {
    border: `2px solid ${theme.palette.divider}`,
    boxShadow: "none",
  }),
}));

const TextFieldLabel = styled(InputLabel, {
  name: "TmtTextField",
  slot: "label",
})(({ theme }) => ({
  ...theme.typography.subtitle1,
  textAlign: "center",
  letterSpacing: "0.015em",
}));

const TextFieldInput = styled(TextField, {
  name: "TmtTextField",
  slot: "input",
})(({ theme }) => ({
  backgroundColor: "lightyellow",
  "& .MuiInputBase-root": {
    borderRadius: 5,
    fontWeight: 300,
    boxSizing:'border-box',
    border: "1px solid #ced4da",
    // padding: theme.spacing(0.5),
  },
  "& .MuiInputBase-input": {
    // borderRadius: 5,
    // fontWeight: 600,
    // boxSizing:'border-box',
    // border: "1px solid #ced4da",
    padding: theme.spacing(0.5),
  },
}));

const TmtTextField = React.forwardRef(function Stat(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "TmtTextField" });
  console.log("Props: ", props);
  const { label, input, variant, ...other } = props;
  const ownerState = { ...props, variant };

  return (
    <TextFieldRoot ref={ref} ownerState={ownerState} {...other}>
      <TextFieldLabel ownerState={ownerState}>{label}</TextFieldLabel>
      <TextFieldInput placeholder={label} ownerState={ownerState}>
        {input}
      </TextFieldInput>
    </TextFieldRoot>
  );
});

TmtTextField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(["outlined"]),
};

export default TmtTextField;

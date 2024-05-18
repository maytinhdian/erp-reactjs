import React from "react";
import PropTypes from "prop-types";
import {
  Input,
  TextField,
  Typography,
  styled,
  useThemeProps,
} from "@mui/material";
import { display } from "@mui/system";

const TextFieldRoot = styled("div", {
  name: "TmtTextField",
  slot: "root",
})(({ theme, ownerState }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(0.5),
  padding: theme.spacing(3, 4),
  alignItems:'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  letterSpacing: "-0.025em",
  fontWeight: 600,
  ...(ownerState.variant === "outlined" && {
    border: `2px solid ${theme.palette.divider}`,
    boxShadow: "none",
  }),
}));

const TextFieldLabel = styled(Typography, {
  name: "TmtTextField",
  slot: "label",
})(({ theme }) => ({
  ...theme.typography.body1,
}));

const TextFieldInput = styled(TextField, {
  name: "TmtTextField",
  slot: "input",
})(({ theme }) => ({
  backgroundColor:'lightyellow',
  ...theme.typography.body1,
}));

const TmtTextField = React.forwardRef(function Stat(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "TmtTextField" });
  const { label, input, variant, ...other } = props;
  const ownerState = { ...props, variant };

  return (
    <TextFieldRoot ref={ref} ownerState={ownerState} {...other}>
      <TextFieldLabel ownerState={ownerState}>{label}</TextFieldLabel>
      <TextFieldInput ownerState={ownerState}>{input}</TextFieldInput>
    </TextFieldRoot>
  );
});

TmtTextField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(["outlined"]),
};

export default TmtTextField;

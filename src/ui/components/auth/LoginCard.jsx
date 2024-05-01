import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { NavLink } from "react-router-dom";

const LoginCard = () => {
  const [checked, setChecked] = React.useState(false);
  const avatarStyle = { backgroundColor: "#D9D9D9" };
  const btnStyle = { backgroundColor: "#1B6DA1", margin: "12px auto" };

  return (
    <Box>
      <Paper
        elevation={12}
        // style={paperStyle}
        sx={{
          width: 280,
          minHeight: "50vh",
          padding: 2,
          margin: "19px auto",
          backgroundColor: (theme) => theme.palette.primary.light,
          borderRadius: "12px",
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 25)",
        }}
      >
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon style={{ color: "#002A57" }} />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          placeholder="Enter your email address"
          fullWidth
          required
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          placeholder="Enter your password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.MuiCheckbox-root": {
                  color: (theme) => theme.palette.secondary.dark,
                },
                "&.Mui-checked": {
                  color: (theme) => theme.palette.secondary.dark,
                },
              }}
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
              defaultChecked
            />
          }
          label="Remember Me"
        />

        <Button
          style={btnStyle}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          Login
        </Button>
        <Typography sx={{ fontSize: "0.85rem" }}>
          <NavLink href="#">Forgot Password? </NavLink>
        </Typography>

        <Typography sx={{ fontSize: "0.85rem" }}>
          Don&apos;t have an account?
          <NavLink to="/signup"> Sign Up Here.</NavLink>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginCard;

import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";
import { LockOpenOutlined } from "@mui/icons-material";

const SignUpCard = () => {
  const paperStyle = {
    padding: 20,
    minHeight: "50vh",
    width: 280,
    margin: "19px auto",
    backgroundColor: "#E6F4F1",
    borderRadius: "12px",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 25)",
  };
  const avatarStyle = { backgroundColor: "#D9D9D9" };
  const btnStyle = { backgroundColor: "#1B6DA1", margin: "12px 0" };

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
            <LockOpenOutlined style={{ color: "#002A57" }} />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <TextField
          id="standard-basic"
          label="Email Address"
          variant="standard"
          placeholder="Enter your email address"
          type="email"
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
        <TextField
          id="standard-basic"
          label="Retype Password"
          variant="standard"
          placeholder="Retype your password"
          type="password"
          fullWidth
          required
        />

        <Button
          style={btnStyle}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          Sign Up
        </Button>

        <Typography sx={{ fontSize: "0.85rem" }}>
          Already have an account?
          <NavLink to="/login"> Login Here.</NavLink>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUpCard;

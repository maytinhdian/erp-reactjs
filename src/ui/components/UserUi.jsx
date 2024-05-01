import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Divider, styled } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { unstable_styleFunctionSx } from "@mui/system";

const UserProfileBox = styled("Box")(unstable_styleFunctionSx);

export default function UserUi() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <UserProfileBox>
      <Avatar
        id="basic-button"
        // aria-controls={open ? 'basic-menu' : undefined}
        // aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      ></Avatar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Logout sx={{ mr: 3 }} />
          Logout
        </MenuItem>
      </Menu>
    </UserProfileBox>
  );
}

// export default UserUi;

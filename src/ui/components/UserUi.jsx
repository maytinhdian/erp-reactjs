import { Login, Logout } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";

function UserUi(props) {
  const [isLogin, setLogin] = useState(true);
  return <IconButton>{isLogin ? <Logout /> : <Login />}</IconButton>;
}

export default UserUi;

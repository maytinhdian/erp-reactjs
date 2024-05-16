import { Box, Typography, useTheme } from "@mui/material";
// import React from 'react';

function Footer() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      bgcolor="primary.light"
      // mt={1}
      sx={{ ...theme.mixins.toolbar }}
      borderRadius="0px 0px 8px 8px"
    >
      <Typography variant="h6" textAlign="right" padding={1} color='whitesmoke'>
        TMT Innovative Solutions Co.,ltd
      </Typography>
    </Box>
  );
}

export default Footer;

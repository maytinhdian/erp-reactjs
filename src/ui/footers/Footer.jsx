import { Box, Paper, Typography } from "@mui/material";
// import React from 'react';

function Footer() {
  return (
    <Box component="footer" bgcolor="primary.main" mt={1} borderRadius={1}>
      <Typography variant="h5" textAlign="right" padding={1}>
        TMT Innovative Solutions Co.,ltd
      </Typography>
    </Box>
  );
}

export default Footer;

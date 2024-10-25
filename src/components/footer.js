import React from 'react';
import { Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px 0',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Copyright Qwik Notify. All rights reserve. Various trademarks held by their respective owners.
      </Typography>
    </Box>
  );
}

export default Footer;

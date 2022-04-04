import React from 'react';
import { Box, Drawer } from '@mui/material';

import Navigation from './Navigation';

const DesktopLayout: React.FC = ({ children }) => {
  return (
    <Box display="flex" height="100%" sx={{ backgroundColor: 'background.default' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 200,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
          },
        }}
      >
        <Navigation />
      </Drawer>
      <Box component="main" sx={{ p: '60px', flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default DesktopLayout;

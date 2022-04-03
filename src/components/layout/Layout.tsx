import React from 'react';
import Box from '@mui/material/Box';

import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <DesktopLayout>{children}</DesktopLayout>
      </Box>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <MobileLayout>{children}</MobileLayout>
      </Box>
    </>
  );
};

export default Layout;

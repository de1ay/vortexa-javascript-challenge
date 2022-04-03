import React from 'react';
import Drawer from '@mui/material/Drawer';

import Navigation from './Navigation';

const DesktopLayout: React.FC = ({ children }) => {
  return (
    <>
      <Drawer variant="permanent" anchor="left">
        <Navigation />
      </Drawer>
      {children}
    </>
  );
};

export default DesktopLayout;

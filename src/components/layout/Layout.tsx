import React from 'react';

import useWindowSize from '../../shared/hooks/useWindowSize';

import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

const Layout: React.FC = ({ children }) => {
  const windowSize = useWindowSize();

  return windowSize.width >= 900 ? <DesktopLayout>{children}</DesktopLayout> : <MobileLayout>{children}</MobileLayout>;
};

export default Layout;

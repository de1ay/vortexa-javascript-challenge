import React, { ComponentPropsWithoutRef } from 'react';
import { List } from '@mui/material';

import Logo from '../../assets/icons/logo_light.svg';
import NavigationLink from './NavigationLink';

const Navigation = () => {
  const links: ComponentPropsWithoutRef<typeof NavigationLink>[] = [
    {
      text: 'Home',
      iconName: 'home',
      to: '/',
    },
    {
      text: 'Boat Ramps',
      iconName: 'map',
      to: 'boat_ramps',
    },
  ];

  return (
    <nav>
      <List>
        {links.map((link) => (
          <NavigationLink key={link.text} {...link} />
        ))}
      </List>
    </nav>
  );
};

export default Navigation;

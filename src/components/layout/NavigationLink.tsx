import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Icon, ListItem, ListItemIcon, ListItemText } from '@mui/material';

type Props = {
  text: string;
  iconName: string;
  to: string;
};

const NavigationLink: React.FC<Props> = (props) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>(function NavLink(itemProps, ref) {
        return <Link to={props.to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [props.to],
  );

  return (
    <ListItem button component={renderLink}>
      <ListItemIcon>
        <Icon>{props.iconName}</Icon>
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  );
};

export default NavigationLink;

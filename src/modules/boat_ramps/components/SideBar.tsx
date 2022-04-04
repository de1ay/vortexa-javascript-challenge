import React from 'react';
import { Paper, Stack } from '@mui/material';

import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <Stack className={styles.container} spacing={2}>
      <Paper elevation={0}>Settings</Paper>
    </Stack>
  );
};

export default SideBar;

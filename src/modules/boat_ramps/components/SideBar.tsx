import React from 'react';
import { Paper, Stack } from '@mui/material';

import BoatRampsBarChart, { Props as BoatRampsBarChartProps } from './BoatRampsBarChart';
import styles from './SideBar.module.css';

type Props = {
  barChartsData: BoatRampsBarChartProps[];
};

const SideBar: React.FC<Props> = (props) => {
  return (
    <Stack className={styles.container} spacing={2}>
      {/* <Paper elevation={0}>Settings</Paper> */}
      {props.barChartsData.map((item, index) => (
        <Paper className={styles.chart} elevation={0} key={index}>
          <BoatRampsBarChart {...item} />
        </Paper>
      ))}
    </Stack>
  );
};

export default SideBar;

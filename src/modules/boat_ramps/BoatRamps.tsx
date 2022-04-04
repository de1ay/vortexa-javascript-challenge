import React, { useState, useEffect } from 'react';

import Feature from '../../shared/types/Feature';
import GetBoatRamps from '../../services/api/requests/GetBoatRamps';
import MapContainer from '../../components/MapContainer';
import SideBar from './components/SideBar';
import styles from './BootRamps.module.css';

const BoatRamps = () => {
  const [filteredBoatRamps, setFilteredBoatRamps] = useState<Feature[]>([]);

  useEffect(() => {
    GetBoatRamps().then((resp) => setFilteredBoatRamps(resp.features));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.map_container}>
        <MapContainer />
      </div>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
    </div>
  );
};

export default BoatRamps;

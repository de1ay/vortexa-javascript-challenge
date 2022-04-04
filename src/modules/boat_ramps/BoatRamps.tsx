import React, { useState, useMemo } from 'react';
import { LngLatBounds, MapboxEvent, ViewStateChangeEvent } from 'react-map-gl';

import { useGetBoatRampsQuery } from '../../services/api/BoatRamps';
import MapContainer from '../../components/MapContainer';
import BoatRampsFilters from './shared/types/BoatRampsFilters';
import ProcessedBoatRamps from './shared/types/ProcessedBoatRamps';
import { Props as BoatRampsBarChartProps } from './components/BoatRampsBarChart';
import SideBar from './components/SideBar';
import BoatRampsLayer from './components/BoatRampsLayer';
import BoatRampsMarkers from './components/BoatRampsMarkers';
import BoatRampSizeCategory from './shared/types/BoatRampSizeCategory';
import FilterAndSplitBoatRamps from './shared/utils/FilterAndSplitBoatRamps';
import styles from './BootRamps.module.css';

const BoatRamps = () => {
  const [filters, setFilters] = useState<BoatRampsFilters>({
    sizeCategory: undefined,
    constructionMaterial: undefined,
  });
  const [mapBounds, setMapBounds] = useState<LngLatBounds>();
  const { data } = useGetBoatRampsQuery();

  const onMapBoundsChange = (e: MapboxEvent<undefined> | ViewStateChangeEvent) => {
    setMapBounds(e.target.getBounds());
  };

  const processedBoatRamps: ProcessedBoatRamps = useMemo(() => {
    if (!data) {
      return {
        boatRampsByMaterial: [],
        boatRampsBySizeCategory: [],
        filteredBoatRamps: [],
      };
    } else return FilterAndSplitBoatRamps(data.features, filters, mapBounds);
  }, [data, filters, mapBounds]);

  const barChartsData = useMemo<BoatRampsBarChartProps[]>(() => {
    if (processedBoatRamps === undefined || processedBoatRamps.filteredBoatRamps.length === 0) return [];
    return [
      {
        data: processedBoatRamps.boatRampsByMaterial,
        onValueClick: (val) => setFilters({ constructionMaterial: val.x.toString() }),
      },
      {
        data: processedBoatRamps.boatRampsBySizeCategory,
        onValueClick: (val) => setFilters({ sizeCategory: val.x as BoatRampSizeCategory }),
      },
    ];
  }, [processedBoatRamps]);

  return (
    <div className={styles.container}>
      <div className={styles.map_container}>
        <MapContainer
          mapProps={{
            onLoad: onMapBoundsChange,
            onZoomEnd: onMapBoundsChange,
            onResize: onMapBoundsChange,
            onDragEnd: onMapBoundsChange,
            onRotateEnd: onMapBoundsChange,
          }}
        >
          <BoatRampsMarkers boatRamps={processedBoatRamps.filteredBoatRamps} />
          <BoatRampsLayer boatRamps={processedBoatRamps.filteredBoatRamps} />
        </MapContainer>
      </div>
      <div className={styles.sidebar}>
        <SideBar barChartsData={barChartsData} />
      </div>
    </div>
  );
};

export default BoatRamps;

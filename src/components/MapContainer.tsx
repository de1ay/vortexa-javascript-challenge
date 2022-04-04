import React, { useState, useEffect, ComponentPropsWithoutRef } from 'react';
import Map from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import styles from './MapContainer.module.css';

type MapProps = ComponentPropsWithoutRef<typeof Map>;

type Props = {
  mapProps?: Omit<MapProps, 'reuseMaps' | 'mapLib' | 'mapStyle' | 'style'>;
};

const MapContainer: React.FC<Props> = ({ children, mapProps }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.map_container}>
      {isMounted && (
        <Map
          id="map"
          reuseMaps
          mapLib={maplibregl}
          mapStyle="https://api.maptiler.com/maps/hybrid/style.json?key=7hzYrk9ZUrvMzSoKcYfC"
          style={{ borderRadius: 10 }}
          {...mapProps}
        >
          {children}
        </Map>
      )}
    </div>
  );
};

export default MapContainer;

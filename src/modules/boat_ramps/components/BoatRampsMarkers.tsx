import React from 'react';
import { Marker } from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';

import Feature from '../../../shared/types/Feature';

type Props = {
  boatRamps: Feature[];
};

const BoatRampsMarkers: React.FC<Props> = (props) => {
  return (
    <>
      {props.boatRamps.length > 0 &&
        props.boatRamps.map((item, index) => {
          return (
            <Marker key={index} longitude={item.properties.centroid[0]} latitude={item.properties.centroid[1]}>
              <RoomIcon color="primary" />
            </Marker>
          );
        })}
    </>
  );
};

export default BoatRampsMarkers;

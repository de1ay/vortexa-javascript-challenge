import React, { useMemo } from 'react';
import { Source, Layer } from 'react-map-gl';

import Feature from '../../../shared/types/Feature';
import FeatureCollection from '../../../shared/types/FeatureCollection';

type Props = {
  boatRamps: Feature[];
};

const BoatRampsLayer: React.FC<Props> = (props) => {
  const displayData: FeatureCollection = useMemo(
    () => ({
      type: 'FeatureCollection',
      features: props.boatRamps,
    }),
    [props.boatRamps],
  );

  return (
    <Source id="data-source" type="geojson" data={displayData}>
      <Layer type="fill" id="data" source="data-source" />
    </Source>
  );
};

export default BoatRampsLayer;

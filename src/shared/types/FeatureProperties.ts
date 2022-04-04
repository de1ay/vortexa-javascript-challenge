import { Position } from 'geojson';

type FeatureProperties = {
  material: string;
  area_: number;
  centroid: Position;
  // omit other fields for now
};

export default FeatureProperties;

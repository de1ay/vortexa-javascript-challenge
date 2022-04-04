import FeatureProperties from './FeatureProperties';

type Feature = {
  type: string;
  id: string;
  geometry_name: string;
  properties: FeatureProperties;
};

export default Feature;

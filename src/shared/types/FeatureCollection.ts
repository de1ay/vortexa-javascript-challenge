import Feature from './Feature';

type FeatureCollection = {
  type: string;
  totalFeatures: number;
  features: Feature[];
};

export default FeatureCollection;

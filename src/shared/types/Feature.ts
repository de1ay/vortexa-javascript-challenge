import { Feature as FeatureG, Geometry } from 'geojson';
import FeatureProperties from './FeatureProperties';

type Feature = FeatureG<Geometry, FeatureProperties>;

export default Feature;

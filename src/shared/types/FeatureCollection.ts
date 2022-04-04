import { FeatureCollection as FeatureCollectionG, Geometry } from 'geojson';
import FeatureProperties from './FeatureProperties';

type FeatureCollection = FeatureCollectionG<Geometry, FeatureProperties>;

export default FeatureCollection;

import { VerticalBarSeriesPoint } from 'react-vis';

import Feature from '../../../../shared/types/Feature';

type ProcessedBoatRamps = {
  filteredBoatRamps: Feature[];
  boatRampsByMaterial: VerticalBarSeriesPoint[];
  boatRampsBySizeCategory: VerticalBarSeriesPoint[];
};

export default ProcessedBoatRamps;

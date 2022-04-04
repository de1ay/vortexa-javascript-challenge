import BoatRampSizeCategory from '../types/BoatRampSizeCategory';
import BoatRampSizeCategoryInterval from '../types/BoatRampSizeCategoryInterval';

const BoatRampSizeCategoryIntervals: Record<BoatRampSizeCategory, BoatRampSizeCategoryInterval> = {
  [BoatRampSizeCategory.Small]: {
    From: 0,
    To: 49,
  },
  [BoatRampSizeCategory.Medium]: {
    From: 50,
    To: 199,
  },
  [BoatRampSizeCategory.Large]: {
    From: 200,
    To: 525,
  },
};

export default BoatRampSizeCategoryIntervals;

import BoatRampSizeCategory from '../types/BoatRampSizeCategory';
import BoatRampSizeCategoryIntervals from '../constants/BoatRampSizeCategoryIntervals';

const GetBoatRampSizeCategoryByArea = (area: number) => {
  if (area > BoatRampSizeCategoryIntervals[BoatRampSizeCategory.Large].To) return;
  if (area < BoatRampSizeCategoryIntervals[BoatRampSizeCategory.Small].From) return;
  if (area >= BoatRampSizeCategoryIntervals[BoatRampSizeCategory.Large].From) {
    return BoatRampSizeCategory.Large;
  }
  if (area >= BoatRampSizeCategoryIntervals[BoatRampSizeCategory.Medium].From) {
    return BoatRampSizeCategory.Medium;
  }
  return BoatRampSizeCategory.Small;
};

export default GetBoatRampSizeCategoryByArea;

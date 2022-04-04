import { LngLatBounds } from 'react-map-gl';

import Feature from '../../../../shared/types/Feature';
import BoatRampSizeCategoryIntervals from '../constants/BoatRampSizeCategoryIntervals';
import BoatRampsFilters from '../types/BoatRampsFilters';
import BoatRampSizeCategory from '../types/BoatRampSizeCategory';
import ProcessedBoatRamps from '../types/ProcessedBoatRamps';
import GetBoatRampSizeCategoryByArea from './GetBoatRampSizeCategoryByArea';

const FilterAndSplitBoatRamps = (
  data: Feature[],
  filters: BoatRampsFilters,
  mapBounds?: LngLatBounds,
): ProcessedBoatRamps => {
  const result: ProcessedBoatRamps = {
    boatRampsByMaterial: [],
    boatRampsBySizeCategory: [],
    filteredBoatRamps: [],
  };
  const boatRampsByMaterial = new Map<string, number>();
  const boatRampsBySizeCategory = new Map<BoatRampSizeCategory, number>();
  data.forEach((item) => {
    if (!isBoatRampValid(item, filters, mapBounds)) return;

    result.filteredBoatRamps.push(item);

    const sizeCategory = GetBoatRampSizeCategoryByArea(item.properties.area_);
    if (sizeCategory === undefined) return;
    let curVal = boatRampsBySizeCategory.get(sizeCategory);
    if (curVal === undefined) {
      boatRampsBySizeCategory.set(sizeCategory, 1);
    } else {
      boatRampsBySizeCategory.set(sizeCategory, curVal + 1);
    }

    const material = processMaterialName(item.properties.material);
    curVal = boatRampsByMaterial.get(material);
    if (curVal === undefined) {
      boatRampsByMaterial.set(material, 1);
    } else {
      boatRampsByMaterial.set(material, curVal + 1);
    }
  });
  boatRampsBySizeCategory.forEach((val, key) => {
    result.boatRampsBySizeCategory.push({
      x: key,
      y: val,
    });
  });
  boatRampsByMaterial.forEach((val, key) => {
    result.boatRampsByMaterial.push({
      x: key,
      y: val,
    });
  });
  return result;
};

const processMaterialName = (name: string) => {
  const splittedName = name.split(' ');
  if (splittedName.length === 1) return name;
  return splittedName.map((item) => item[0]).join('');
};

// TODO: Rename function
const isBoatRampValid = (item: Feature, filters: BoatRampsFilters, mapBounds?: LngLatBounds) => {
  if (mapBounds && !mapBounds.contains([item.properties.centroid[0], item.properties.centroid[1]])) {
    return false;
  }
  if (filters.sizeCategory) {
    const interval = BoatRampSizeCategoryIntervals[filters.sizeCategory];
    if (item.properties.area_ < interval.From || item.properties.area_ > interval.To) return false;
  }
  if (filters.constructionMaterial && processMaterialName(item.properties.material) !== filters.constructionMaterial) {
    return false;
  }
  return true;
};

export default FilterAndSplitBoatRamps;

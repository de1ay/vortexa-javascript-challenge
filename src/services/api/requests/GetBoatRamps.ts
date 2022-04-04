import FeatureCollection from '../../../shared/types/FeatureCollection';

const GET_BOAT_RAMPS_URL =
  'https://raw.githubusercontent.com/JRGranell/javascript-challenge/master/data/boat_ramps.geojson';

const GetBoatRamps = async (): Promise<FeatureCollection> => {
  const response = await fetch(GET_BOAT_RAMPS_URL, {
    method: 'GET',
  });
  const data: FeatureCollection = await response.json();
  if (response.ok) {
    console.log(data);
    return Promise.resolve(data);
  } else {
    return Promise.reject(response.statusText);
  }
};

export default GetBoatRamps;

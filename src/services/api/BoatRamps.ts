import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MultiPolygon } from 'geojson';

import FeatureCollection from '../../shared/types/FeatureCollection';

const BASE_URL = 'https://raw.githubusercontent.com/JRGranell/javascript-challenge/master/data/';

export const BoatRampsApi = createApi({
  reducerPath: 'boatRampsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getBoatRamps: builder.query<FeatureCollection, void>({
      query: () => 'boat_ramps.geojson',
      transformResponse: (resp: FeatureCollection) => {
        resp.features = resp.features.map((item) => {
          const mp = item.geometry as MultiPolygon;
          item.properties.centroid = mp.coordinates[0][0][1];
          return item;
        });
        return resp;
      },
    }),
  }),
});

export const { useGetBoatRampsQuery } = BoatRampsApi;

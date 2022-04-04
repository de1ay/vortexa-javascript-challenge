import { configureStore } from '@reduxjs/toolkit';

import { BoatRampsApi } from '../services/api/BoatRamps';

const rootStore = configureStore({
  reducer: {
    [BoatRampsApi.reducerPath]: BoatRampsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(BoatRampsApi.middleware),
  devTools: true,
});

export default rootStore;

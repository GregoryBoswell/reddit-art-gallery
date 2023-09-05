import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './apiSlice';
import artReducer from './redditSlice';

const store = configureStore({
  reducer: {
    art: artReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // This gives us a lot of functionality out of the box, like queries, mutations etc. query is used to fetch data from the API, mutation is used to update data in the API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // The concat is used to add the thunk middleware from the apiSlice to the default middleware
  devTools: true,
});

export default store;

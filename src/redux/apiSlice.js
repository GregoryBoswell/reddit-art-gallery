/* eslint-disable no-unused-vars */
// This is similar to redux thunk used for making async requests in redux. It is used to make async requests in redux toolkit to APIs.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'https://www.reddit.com' }); //If we are using proxy in vite.config.js, we don't need to specify the base url(string) here

// This is the Parent slice
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Artwork'],
  endpoints: (builder) => ({}), // We can define multiple endpoints here, using the builder to make the requests
});

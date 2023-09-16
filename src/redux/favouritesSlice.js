import { apiSlice } from './apiSlice';

// https://www.reddit.com/r/Art.json

const BASE_URL = '/r';

// The artApiSlice is where will be making request to our API. We will be using this slice in our components to make requests to our API, to get the art data.
export const artApiSlice = apiSlice.injectEndpoints({
  // The injectEndpoints helps us to create our own endpoint in this file and  inject the endpoints into the parent slice on line 11. apiSlice is the parent slice.
  endpoints: (builder) => ({
    // Make the request to the API
    art: builder.query({
      query: () => ({
        url: `${BASE_URL}/Art.json`,
        // method: 'GET',
      }),
    }),
    // register: builder.mutation({
    //   query: (credentials) => ({
    //     url: `${USERS_URL}/register`,
    //     method: 'POST',
    //     body: credentials,
    //   }),
    // }),
    // logout: builder.mutation({
    //   query: () => ({
    //     url: `${USERS_URL}/logout`,
    //     method: 'POST',
    //   }),
    // }),
    // updateUser: builder.mutation({
    //   query: (credentials) => ({
    //     url: `${USERS_URL}/profile`,
    //     method: 'PUT',
    //     body: credentials,
    //   }),
    // }),
  }),
});

export const { useArtQuery } = artApiSlice;

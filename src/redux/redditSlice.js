/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

// The slices are just places where we can keep some pieces of state and reducers that take in actions.

// It's place where we can define our reducers and actions. We can then import them in our store.js file and use them in our components.
const initialState = {
  artInfo: localStorage.getItem('artInfo')
    ? JSON.parse(localStorage.getItem('artInfo'))
    : null,
};

// The redditSlice will be responsible for taking the data we get from our API and storing in the localStorage and also in our redux state.

// It will be  storing the art info . We will also store the art info in the local storage so that the user stays in even after refreshing the page.

const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {
    getArtData: (state, action) => {
      state.artInfo = action.payload; // action.payload is the art info we get from the API. This is what we will be storing in our redux state.
      localStorage.setItem('artInfo', JSON.stringify(action.payload));
    },
  },
});

export const { getArtData } = redditSlice.actions;

export default redditSlice.reducer;

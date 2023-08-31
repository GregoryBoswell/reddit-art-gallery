import { createSlice } from "@reduxjs/toolkit";
import { test_data } from './data/test_data';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { 
        counter: 0, 
        galleryLength: test_data.length,
        currentArtwork: test_data[0],
    },
    reducers: {
        increment(state) {
            if (state.counter < state.galleryLength - 1) state.counter++;
        },
        decrement(state) {
            if (state.counter > 0) state.counter--;
        },
        changeArtwork(state) {
            state.currentArtwork = test_data[state.counter];
        },
    },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import favoritesSlice from "./favorites-slice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        favorites: favoritesSlice.reducer,
    },
});

export default store;
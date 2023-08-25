import { createSlice } from "@reduxjs/toolkit";
import { favorites } from "./data/favorites";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: favorites,
    },
    reducers: {
        addFavorite() {

        },
    }
});
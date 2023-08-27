import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
        isFavorited: false,
    },
    reducers: {
        addFavorite(state, action) {
            const newArtwork = action.payload;
            const fullDate = new Date();
            const date = fullDate.toDateString();


            if (state.favorites.filter(object => object.id == newArtwork.id) == false) {
                state.favorites.push({
                    id: newArtwork.id,
                    over_18: newArtwork.over_18,
                    title: newArtwork.title,
                    url: newArtwork.url,
                    thumbnail: newArtwork.thumbnail,
                    date_added: date,
                    thoughts: '',
                });
            };   

        },
        removeFavorite(state, action) {
            const newArtwork = action.payload;
            const artworkIndex = state.favorites.findIndex((object) => object.id == newArtwork.id);

            state.favorites.splice(artworkIndex, 1);
        },
        checkIsFavorited(state, action) {
            if (state.favorites.filter(object => object.id == action.payload.id) == false) {
                state.isFavorited = false;
            } else {
                state.isFavorited = true;
            };
        },
    }
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice;
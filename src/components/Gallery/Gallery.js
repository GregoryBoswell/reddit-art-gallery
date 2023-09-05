import React from 'react';
import './Gallery.css';
import heart_empty from '../../media/images/heart-icon-empty.png';
import heart_full from '../../media/images/heart-icon-full.png';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../store/counter-slice';
import { favoritesActions } from '../../store/favorites-slice';
import { useArtQuery } from '../../redux/favouritesSlice';
import { getArtData } from '../../redux/redditSlice';

function Gallery() {
  // const counter = useSelector((state) => state.counter.counter);
  // const galleryLength = useSelector((state) => state.counter.galleryLength);
  // const currentArtwork = useSelector((state) => state.counter.currentArtwork);
  // const isFavorited = useSelector((state) => state.favorites.isFavorited);

  const dispatch = useDispatch();
  // Function to fire the query
  const artwork = useArtQuery();
  // get the data from the query
  const { artInfo } = useSelector((state) => state.art);

  useEffect(() => {
    dispatch(getArtData(artwork.data));
  }, [artwork.data]);

  console.log(artInfo);

  // const decrement = () => {
  //   dispatch(counterActions.decrement());
  //   dispatch(counterActions.changeArtwork());
  // };

  // const increment = () => {
  //   dispatch(counterActions.increment());
  //   dispatch(counterActions.changeArtwork());
  // };

  // const favorite = () => {
  //   dispatch(favoritesActions.addFavorite(currentArtwork));
  //   checkIsFavorited();
  // };

  // const removeFavorite = () => {
  //   dispatch(favoritesActions.removeFavorite(currentArtwork));
  //   checkIsFavorited();
  // };

  // const checkIsFavorited = () => {
  //   dispatch(favoritesActions.checkIsFavorited(currentArtwork));
  // };

  // useEffect(() => {
  //   checkIsFavorited();
  // });

  return (
    <main>
      <div className="grid-box-gallery">
        <p>Gallery</p>
        {/* <section className="description-box">
          <header>
            <h2 className="title">{currentArtwork.title}</h2>

            <p className="author">By u/{currentArtwork.author}</p>
          </header>

          <p className="description">
            {currentArtwork.selftext ? `"${currentArtwork.selftext}"` : ''}
          </p>
        </section>

        <section className="art-display">
          <div className="artwork-box">
            <img
              src={`${currentArtwork.url}`}
              className="artwork"
              alt="Artwork"
            />
          </div>

          <div className="counter-box">
            <div>
              <button
                onClick={decrement}
                className={counter === 0 ? 'hidden' : ''}
              >
                Previous
              </button>

              <button
                onClick={increment}
                className={counter === galleryLength - 1 ? 'hidden' : ''}
              >
                Next
              </button>
            </div>

            <p className="counter">
              {counter + 1} / {galleryLength}
            </p>
          </div>
        </section>

        <div className="heart-box">
          <img
            onClick={isFavorited ? removeFavorite : favorite}
            src={isFavorited ? heart_full : heart_empty}
            alt="Heart Icon"
            className="heart-icon"
          />
        </div> */}
      </div>
    </main>
  );
}

export default Gallery;

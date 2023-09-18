import React from 'react';
import './Gallery.css';
import heart_empty from '../../media/images/heart-icon-empty.png';
import heart_full from '../../media/images/heart-icon-full.png';
import loading_image from '../../media/images/loading-image.png'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../store/counter-slice';
import { favoritesActions } from '../../store/favorites-slice';
import { useArtQuery } from '../../redux/favouritesSlice';
import { getArtData } from '../../redux/redditSlice';

function Gallery() {
  const { data, isLoading, isSuccess, isError, error } = useArtQuery();

  // Load data

  let gallery = [];

  if (isLoading) {
    gallery = [{title: 'Loading...', author: '...', selftext: '', url: loading_image}];
  } else if (isSuccess) {
    console.log(data);

    // Push the data to the gallery array
    for (let i = 0; i < 20; i++) {
      let object = data.data.children[i].data;

      if (object.over_18 == false) {
          gallery.push({
            title: object.title,
            author: object.author,
            selftext: object.selftext,
            url: object.url,
          })
      }
  }
    
  } else if (isError) {
    gallery = [{title: 'Error', author: '...', selftext: 'The data was unable to load.', url: ''}];
  }

  console.log('this is the gallery', gallery);

  // Counter
  const [counter, setCounter] = useState(0);

  // Gallery length
  let galleryLength = gallery.length;

  // Increment
  const increment = () => {
    if (counter < galleryLength - 1) {
      setCounter(count => count + 1);
    }
  };

  // Decrement
  const decrement = () => {
    if (counter > 0) {
      setCounter(count => count -1);
    }
  };


  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    console.log(data);
    content = (
      <ul>
        {data.data.children.map((post) => (
          <li key={post.data.id}> {post.data.title} </li>
        ))}
      </ul>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <main>
      <div className="grid-box-gallery">
        <section className='description-display'>
          <div className='description-box'>
            <header>
              <h2 className="title">{gallery[counter].title}</h2>
              <p className="author">By u/{gallery[counter].author}</p>
            </header>
            <p className="description">
              {gallery[counter].selftext}
            </p>
          </div>
        </section>
        <section className="art-display">
          <div className="artwork-box">
            <img src={gallery[counter].url} className='artwork'/>
            <img src={heart_empty} className='heart-icon'/>
          </div>
          <div className="counter-box">
            <div>
              <button onClick={decrement} className={counter > 0 ? '' : 'hidden'}>Previous</button>
              <button onClick={increment} className={counter < galleryLength - 1 ? '' : 'hidden'}>Next</button>
            </div>
            <p className="counter">
              {counter + 1} / {galleryLength}
            </p>
          </div>
        </section>
        <section></section>
      </div>
    </main>
  );
}

export default Gallery;

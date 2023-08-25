import React from "react";
import './Gallery.css'
import heart_empty from '../../media/images/heart-icon-empty.png';
import heart_full from '../../media/images/heart-icon-full.png';
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../store/counter-slice";

function Gallery() {
    const counter = useSelector((state) => state.counter.counter);
    const galleryLength = useSelector((state) => state.counter.galleryLength)
    const currentArtwork = useSelector((state) => state.counter.currentArtwork)

    const dispatch = useDispatch();


    const decrement = () => {
      dispatch(counterActions.decrement());
      dispatch(counterActions.changeArtwork());
    }; 

    const increment = () => {
      dispatch(counterActions.increment());
      dispatch(counterActions.changeArtwork());
    };

    return (

        <body>

          <div className='grid-box-gallery'>

            <section className='description-box'>

              <header>

              <h2 className='title'>{currentArtwork.title}</h2>

              <p className='author'>By u/{currentArtwork.author}</p>

              </header>

              <p className='description'>{currentArtwork.selftext ? `"${currentArtwork.selftext}"` : ''}</p>

            </section>

            <section className='art-display'>

    
              <div className='artwork-box'>

                <img src={`${currentArtwork.url}`} className='artwork' />

              </div>
    
              <div className='counter-box'>

                <div>

                  <button onClick={decrement} className={(counter === 0) ? 'hidden' : ''}>Previous</button>

                  <button onClick={increment} className={(counter === galleryLength - 1) ? 'hidden' : ''}>Next</button>

                </div>

                <p className='counter'>{ counter + 1 } / { galleryLength }</p>

              </div>
            
            </section>

            <div className="heart-box">

              <img src={heart_empty} alt='Heart Icon' className='heart-icon' />

            </div>

          </div>

        </body>
    );
    
}

export default Gallery;
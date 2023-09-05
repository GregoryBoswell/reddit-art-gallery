import React from 'react';
import './Favorites.css';
import delete_icon from '../../media/images/delete-icon.png';
import { useSelector, useDispatch } from 'react-redux';
import { favoritesActions } from '../../store/favorites-slice';

function Favorites() {
  // const favorites = useSelector((state) => state.favorites.favorites);

  // const dispatch = useDispatch();

  // const removeFavorite = (key) => {
  //     dispatch(favoritesActions.removeFavorite(key));
  // };

  // const listItems = favorites.map((item) =>
  //     <li key={item.id} className="favorite-item">

  //         <div className="title-box">

  //             <h4>{item.title}</h4>

  //             <img src={delete_icon} className="delete-button" />

  //         </div>

  //         <p className="date-added">Added {item.date_added}</p>

  //         <a href={item.url} rel="noreferrer noopener" target="_blank" alt="Link to reddit post"><img src={item.thumbnail} className="thumbnail" /></a>

  //     </li>
  // );

  return (
    <main>
      <p>Favourites</p>

      {/* <section className="favorites">

                    <ul>

                        {listItems}

                    </ul>

                </section> */}
    </main>
  );
}

export default Favorites;

import React from "react";
import './Favorites.css';
import delete_icon from '../../media/images/delete-icon.png';
import nsfw_icon from '../../media/images/nsfw-icon.png';
import { useSelector, useDispatch } from "react-redux";
import { favoritesActions } from "../../store/favorites-slice";

function Favorites() {

    const favorites = useSelector((state) => state.favorites.favorites);

    const dispatch = useDispatch();

    const removeFavorite = (value) => {
        dispatch(favoritesActions.removeFavorite(value));
    };

    const listItems = favorites.map((item) => 
        <li className="favorite-item">

            <div className="title-box">

                <h4>{item.title}</h4>

                <img onClick={removeFavorite} src={delete_icon} className="delete-button" />
 
            </div>

            <p className="date-added">Added {item.date_added}</p>
            
            <a href={item.url} rel="noreferrer noopener" target="_blank" alt="Link to reddit post"><img src={item.thumbnail == 'nsfw' ? nsfw_icon : item.thumbnail} className="thumbnail" /></a>

            {/*<textarea rows="2" placeholder="Add your thoughts..."></textarea>*/}

        </li>
    );

    return (

        <body>

                <section className="favorites">

                    <ul>

                        {listItems}

                    </ul>

                </section>


        </body>
    );
}

export default Favorites;
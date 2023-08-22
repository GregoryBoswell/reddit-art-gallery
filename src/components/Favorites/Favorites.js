import React from "react";
import './Favorites.css';

function Favorites() {
    return (

        <body>

            <div className="grid-box">

                <nav>
                    <a href='Gallery' className="navigation"><i className="arrow left" /> Return to Gallery</a>

                </nav>

                <section className="favorites">

                    <ul>

                        <li className="favorite-item">

                            <h4>Untitled, u/melouke, Marker and biro, 2023</h4>
                            <img src="https://b.thumbs.redditmedia.com/AeNLy_ivCTO0Va3HAuQKfA-MGiaVtQEabyGMc-l0Twk.jpg" className="thumbnail"></img>
                            <a href="https://i.redd.it/npi05g5x6njb1.jpg" target="_blank">https://i.redd.it/npi05g5x6njb1.jpg</a>

                        </li>

                    </ul>

                </section>

            </div>

        </body>
    );
}

export default Favorites;
import React from "react";
import './Favorites.css';

function Favorites() {

    return (

        <body>



                <section className="favorites">

                    <ul>

                        <li className="favorite-item">

                            <h4>Untitled, u/melouke, Marker and biro, 2023</h4>

                            <p className="date-added">Added 22/08/2023</p>
                            
                            <a href="https://i.redd.it/npi05g5x6njb1.jpg" target="_blank" className="thumbnail"><img src="https://b.thumbs.redditmedia.com/AeNLy_ivCTO0Va3HAuQKfA-MGiaVtQEabyGMc-l0Twk.jpg" /></a>

                            <textarea rows="1" placeholder="Add your thoughts..."></textarea>
                        </li>

                    </ul>

                </section>


        </body>
    );
}

export default Favorites;
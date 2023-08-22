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

                            <h4>Family portrait, u/artsofme, oil paint, 2023</h4>
                            <a href="https://i.redd.it/qjjxvy1tlgjb1.jpg" target="_blank">https://i.redd.it/qjjxvy1tlgjb1.jpg</a>

                        </li>

                        <li className="favorite-item">

                            <h4>Golden Fields, Amberbrunsdenart, Oil on canvas, 2023</h4>
                            <a href="https://i.redd.it/yoeqbbgwvgjb1.jpg" target="_blank">https://i.redd.it/yoeqbbgwvgjb1.jpg</a>

                        </li>

                    </ul>

                </section>

            </div>

        </body>
    );
}

export default Favorites;
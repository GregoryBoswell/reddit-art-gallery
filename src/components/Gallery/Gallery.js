import React from "react";
import './Gallery.css'
import heart_empty from '../../media/images/heart-icon-empty.png';
import heart_full from '../../media/images/heart-icon-full.png';

function Gallery() {

    return (

        <body>

          <div className='grid-box'>
    
            <nav>
                <a href='Favorites' className='navigation'><i className="arrow left" /> Favorites</a>
            </nav>
    
            <section className='art-display'>

              <header>

                <h2 className='title'>Title</h2>

                <p className='author'>By Author Name</p>

              </header>
    
              <div className='artwork-box'>

                <img src='https://i.redd.it/espqz2np66jb1.jpg' alt='Title goes here' className='artwork' />

              </div>
    
              <div className='counter-box'>

                <div>

                  <button>Previous</button>

                  <button>Next</button>

                </div>

                <p className='counter'>1/10</p>

              </div>
            
            </section>
    
            <section className='description-box'>

                <img src={heart_empty} alt='Heart Icon' className='heart-icon' />

                <p className='description'>"This is the where the description will be displayed. Lorem ipsum"</p>

            </section>

          </div>

        </body>
    );
    
}

export default Gallery;
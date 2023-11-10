import React from 'react'
import './home.css'

import purpleImage from "../../assets/purple.png";

const Home = () => {
  return (
    <section className="home-section" id='home'>
      <div className="effect-wrap">
        <div className="effect effect-1"></div>
        <div className="effect effect-2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="effect effect-3"></div>
        <div className="effect effect-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="container">
        <div className="row full-screen align-items-center">
          <div className="home-text">
            <h2>Digital <span>Watch for </span> Luxurious Life</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam perspiciatis molestias deserunt, ad dolorum voluptas nam repudiandae molestiae reiciendis, quod, ipsa magnam cupiditate dolore et. Molestiae quas eligendi illo perferendis!</p>
            <a href="#" className='btn-1'>buy now</a>
          </div>
          <div className="home-image">
            <div className="img-box">
              <img src={purpleImage}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
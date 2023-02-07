import React from 'react';

import hero_image from './images/hero_image.png';

function Hero() {
  return (
    <section className="hero">

        <div className="left">
          <div className="top">
            <h1>Buy & Trade<br></br>Cryptocurrencies</h1>
            <p>Join the millions of people who trust us to securely buy, sell, and store their cryptocurrencies.</p>

            <div className="btn-container">
            <a href="" className='pd-right'>Sign Up</a>
            <a href="">Learn More</a>
            </div>

          </div>

          <div className="bottom"></div>

        </div>

        <div className="right">
            <img src={hero_image} alt="" />
        </div>

    </section>
  )
}

export default Hero
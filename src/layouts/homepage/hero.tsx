import React from 'react';

import hero_image from './images/hero_image.png';

function Hero() {
  return (
    <section className="hero">

        <div className="left">
          <div className="top">
            <h1>Buy & Trade Cryptocurrencies</h1>
            <p>it</p>
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
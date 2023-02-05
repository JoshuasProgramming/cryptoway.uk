import React from 'react';

import hero_image from './images/hero_image.png';

function Hero() {
  return (
    <section className="hero">

        <div className="left"></div>

        <div className="right">
            <img src={hero_image} alt="" />
        </div>

    </section>
  )
}

export default Hero
import React from 'react';

import hero_image from './images/hero_image.png';

function Hero() {
  return (
    <section className="hero">

        <div className="left">
          <div className="top">
            <a href="" className='top-btn'>Jump Start Your Portfolio 	  &#10148;</a>
            <h1>Buy & Trade<br></br>Cryptocurrencies</h1>
            <p>Join the millions of people who trust us to securely buy, sell, and store their cryptocurrencies.</p>

            <div className="btn-container">
              <a href=""className='pd-right btns' >Sign Up</a>
              <a href=""className='btns'>Learn More</a>
            </div>

            {/* <div className="top-separator">
              <div className="sep-left"></div>
              <div className="sep-middle"><p>have a go at</p></div>
              <div className="sep-right"></div>
            </div>

            <div className="networth-container">
              <h4>Networth Tracker</h4>
            </div> */}

          </div>
        </div>

        <div className="right">
            <img src={hero_image} alt={hero_image} />
        </div>

    </section>
  )
}

export default Hero
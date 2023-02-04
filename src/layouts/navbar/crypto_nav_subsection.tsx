import React, { useState } from 'react';

import Top from './top';

function Crypto_nav_subsection(props:any){

  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    if(dropdown == false){
      setDropdown(true)
    } 

  }

  const removeDropdown = () => {
    setDropdown(false)
  }

  return (
    <>
    <div className='navbar-middle-data' onMouseEnter={showDropdown} onMouseLeave={removeDropdown}>

        <img src={props.image} />
        {
        props.market_cap_change_percentage_24h > 0.00 ? 
        <p>{props.name}: <span className='green'>{props.market_cap_change_percentage_24h.toFixed(2)}% &#11165;</span></p>
        :
        <p>{props.name}: <span className='red'>{props.market_cap_change_percentage_24h.toFixed(2)}% &#11167;</span></p>
        }
        <p >£{props.current_price}</p>
        
        { dropdown == false ? false :
          <section className="crypto_nav_dropdown" id="dropdown">
            <div className='underline'>
                <h3>24h Low</h3>
                <p className='red' title='Lowest value in the last 24 hours'>&#11167; £{props.low_24h.toLocaleString("en-US")}</p>
            </div>

            <div className='underline'>
                <h3>24h High</h3>
                <p className='green' title='Highest value in the last 24 hours'>&#11165; £{props.high_24h.toLocaleString("en-US")}</p>

            </div>
            <div className='underline'>
                <h3>Price Change 24h &#9650; </h3>
                {props.price_change_percentage_24h > 0.00 ? 
                  <p className='green' title='How much the price has changed in the last 24 hours' >&#11165; {props.price_change_percentage_24h}%</p>

                  :

                  <p className='red' title='How much the price has changed in the last 24 hours'>&#11167; {props.price_change_percentage_24h}%</p>

                }
            </div>

            <div>
              <h3>{props.name}</h3>
            </div>

          </section>
        }


    </div>
    </>
  )
}

export default Crypto_nav_subsection;
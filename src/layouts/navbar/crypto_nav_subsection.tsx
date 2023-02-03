import React from 'react';

function Crypto_nav_subsection(props:any){

  return (
    <div className='navbar-middle-data'>
        {/* <p>{props.symbol}</p>
        <p>{props.low_24h}</p>
        <p>{props.market_cap_change_percentage_24h}</p>
        <p>{props.high_24h}</p>
        <p>{props.current_price}</p> */}
        {/* { props.market_cap_change_percentage > 0 }
        <p>{props.name}: <span>{props.market_cap_change_percentage_24h}%</span></p> */}

        <img src={props.image} />
        {
        props.market_cap_change_percentage_24h > 0.00 ? 
        <p>{props.name}: <span className='green'>{props.market_cap_change_percentage_24h.toFixed(2)}%</span></p>
        :
        <p>{props.name}: <span className='red'>{props.market_cap_change_percentage_24h.toFixed(2)}%</span></p>
        }
        <p>£{props.current_price}</p>
        
    </div>
  )
}

export default Crypto_nav_subsection;
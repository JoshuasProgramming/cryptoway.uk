import React from 'react';

function Crypto_nav_subsection(props:any){
  
  return (
    <h1>{props.name}  {props.symbol}  {props.low_24h}</h1>
  )
}

export default Crypto_nav_subsection;
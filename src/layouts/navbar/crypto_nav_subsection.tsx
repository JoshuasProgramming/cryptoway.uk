import React from 'react';

function Crypto_nav_subsection(props:any){
  console.log(props)
  return (
    <h1>{props.name}  {props.symbol}</h1>
  )
}

export default Crypto_nav_subsection;
//import react
import React, { useEffect , useState} from 'react';

//import uselocation => allows us to get props from different components
import { useLocation } from 'react-router-dom'

function Coin_page(props:any) {
  return (
    <p>{props.market_cap}</p>
  )
}

export default Coin_page
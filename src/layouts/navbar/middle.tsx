//import react
import React, { useEffect } from 'react';

import { useState } from 'react';

import axios from 'axios';

// import '../styles/style.css';

//import Crypto_nav_subsection
import Crypto_nav_subsection from './crypto_nav_subsection';

function Middle(): JSX.Element | any {
  let count:number = 0;

  const [data, setData] = useState();

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=10&page=1&sparkline=false"

  useEffect(() => {
    axios.get(url).then((response:any) => {
      setData(response.data)
    }).catch((error:any) => {
      console.log(error);
    })
  }, [])

  if((count == 0) && data !== undefined){
    count = count + 1;

    return (
      <section className="navbar-middle">
        {
          Object.assign(data)?.map((value:any, index:number) => (
            <Crypto_nav_subsection key={value.symbol} name={value.name} symbol={value.symbol} low_24h={value.low_24h}/>
          ))
        }
      </section>
      
    )
  }
}

export default Middle;
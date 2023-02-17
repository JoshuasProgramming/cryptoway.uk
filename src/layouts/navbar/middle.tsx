//import react
import React, { useEffect, useState} from 'react';

//import axios for fetching
import axios from 'axios';

//import Crypto_nav_subsection
import Crypto_nav_subsection from './crypto_nav_subsection';

function Middle(): JSX.Element | any {

  let count:number = 0;

  // data variable and setData function with initial value of nothing.
  const [data, setData] = useState();

  //variable to store the api link for the crypto coins
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  // const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=20&page=1&sparkline=false"

  //code to fetch the data from the 'url' variable
  useEffect(() => {
    axios.get(url).then((response:any) => {
      setData(response.data)
    }).catch((error:any) => {
      console.log(error);
    })
  }, [])

  console.log(data);

  //when the count is zero and the data isn't 'undefined'...
  if((count == 0) && data !== undefined){
    count = count + 1;

    //map through the data and insert specific values to the 'crypto_nav_subsection' component
    return (
      <section className="navbar-middle" id="nav">
        {
          Object.assign(data)?.map((value:any, index:number) => (
            <Crypto_nav_subsection 
              key={value.symbol} 
              name={value.name} 
              symbol={value.symbol} 
              low_24h={value.low_24h} 
              market_cap_change_percentage_24h={value.market_cap_change_percentage_24h}
              high_24h={value.high_24h}
              current_price={value.current_price}
              image={value.image}
              market_cap_rank={value.market_cap_rank}
              price_change_percentage_24h={value.price_change_percentage_24h}
              />
          ))
        }
      </section>
      
    )
  }
}

export default Middle;
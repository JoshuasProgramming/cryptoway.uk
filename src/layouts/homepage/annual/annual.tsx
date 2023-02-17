//import react
import React, { useEffect, useState} from 'react';

//import axios for fetching
import axios from 'axios';

// //import Crypto_nav_subsection
import Annual_comp from './annual_comp';

function Annual(): JSX.Element | any {

  let count:number = 0;

  // data variable and setData function with initial value of nothing.
  const [data, setData] = useState();

  //variable to store the api link for the crypto coins
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1y";

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

    return(
        <section className="annual">
            <div className="annual-heading"></div>

            <div className="annual-parent">
                {
                Object.assign(data)?.map((value:any, index:number) => (
                    <Annual_comp 
                    key={value.symbol} 
                    annual={value.price_change_percentage_1y_in_currency}
                    
                    />
                ))
                }
            </div>
        </section>
    )}
}

export default Annual
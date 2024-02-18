//import react
import React, { useEffect , useState} from 'react';

//imported axios for data fetching
import axios from 'axios';

//importing previous components
import Top from '../layouts/navbar/top';
import Middle from '../layouts/navbar/middle';


import { useParams } from 'react-router-dom'

function Coin_page(props:any): JSX.Element | any {
  const { name } = useParams();
  const [data, setData] = useState<any>();

  //code to fetch the data from the 'url' variable
  useEffect(() => {

    //variable to store the api link for the crypto coins
    const url = `https://api.coingecko.com/api/v3/coins/${name?.toLowerCase()}?vs_currency=gbp&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1y`;

    axios.get(url)
      .then((response:any) => {
        setData(response.data);
      })
      .catch((error:any) => {
        console.log(error);
      });
  }, [name]);

    console.log(data);
    // alert(data.image);

  if (data && data.description) {
    return (

      <section>
        <Top/>
        <Middle/>
        {/* <img src={data.image} alt="coin-image" /> */}
        <p>{data.description.en}</p>

        <p>{data.id}</p>
      </section>
    );
  } else {
    return null; // Return null if data is not yet fetched or description is not available
  }
}

export default Coin_page;

import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Popular(): JSX.Element | any {

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

    //when the count is zero and the data isn't 'undefined'...
    if((count == 0) && data !== undefined){
        count = count + 1;


        return (
            <section className="popular">
                <div className="popular-heading">
                    <h1>Popular Cryptocurrencies</h1>
                </div>

                <table>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>Chart</th>
                        <th>Market Cap</th>
                    </tr>
                    {
                    Object.assign(data)?.map((value:any, index:number) => (
                        <tr>
                        <td>{value.market_cap_rank}</td>   
                        <td>{value.symbol}</td>    
                        <td>{value.current_price}</td>
                        <td>{value.price_change_percentage_24h}</td>
                        
                        <td>{value.market_cap}</td>
                        </tr>                    
                    ))
                    }
                </table>

            </section>
        )
    }
}

export default Popular
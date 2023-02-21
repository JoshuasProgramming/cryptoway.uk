import axios from 'axios';
import React, { useEffect, useState } from 'react'

//import react router from 'react-router
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function Popular(): JSX.Element | any {


    let getUnit = (num:any) => {
        // Nine Zeroes for Billions
        return Math.abs(Number(num)) >= 1.0e+9

        ? (Math.abs(Number(num)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(num)) >= 1.0e+6

        ? (Math.abs(Number(num)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(num)) >= 1.0e+3

        ? (Math.abs(Number(num)) / 1.0e+3).toFixed(2) + "K"

        : Math.abs(Number(num));
    }

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
                    <a>View all markets &#10148;</a>
                </div>

                <table>
                    <tr className='thead'>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>Total Volume</th>
                        <th>Market Cap</th>
                    </tr>
                    {
                    Object.assign(data)?.map((value:any, index:number) => (
                        
                        // <Link to="../pages/Read_more" state={
                        //         {rank: value.rank, title: value.title, date:value.date, image: value.image.src, alt: value.image.alt, code_snippet1: value.code_snippet1, 
                        //         paragraph1: value.paragraph1, paragraph2: value.paragraph2, heading1_text: value.heading1_text, paragraph1_text: value.paragraph1_text, 
                        //         code_snippet2: value.code_snippet2, heading2_text: value.heading2_text, paragraph2_text: value.paragraph2_text, 
                        //         githubRepo: value.githubRepo, openLink: value.openLink, language1: value.language1, language2: value.language2, 
                        //         language3: value.language3, language4: value.language4, language5:value.language5}} 
                        //         style={{ textDecoration: 'none' }}  >Read more &#x27a4;</Link>
                        
                        <>
                            {/* <Link to="./pages/coin_page" state={{ market_cap: value.market_cap_rank }}> */}
                                <tr className='data'>
                                    <td>{value.market_cap_rank}</td>
                                    <td className='test'><img src={value.image} /> {value.name} <span>{value.symbol.toUpperCase()}</span></td>
                                    <td><strong>£{value.current_price.toLocaleString("en-US")}</strong></td>

                                    {value.price_change_percentage_24h < 0.00 ?

                                        <td> <h1 className='red'>{value.price_change_percentage_24h.toFixed(2)}%</h1></td>

                                        :

                                        <td><h1 className='green'>{value.price_change_percentage_24h.toFixed(2)}%</h1></td>
                                    }

                                    <td><strong>{getUnit(value.total_volume)}</strong></td>
                                    <td><strong>£{getUnit(value.market_cap).toLocaleString("en-US")}</strong></td>
                                </tr>
                            {/* </Link> */}
                        </>
                        // <tr className='data'>
                        // <td>{value.market_cap_rank}</td>   
                        // <td className='test'><img src={value.image} /> {value.name} <span>{value.symbol.toUpperCase()}</span></td>    
                        // <td><strong>£{value.current_price.toLocaleString("en-US")}</strong></td>

                        // {
                        // value.price_change_percentage_24h < 0.00 ?

                        // <td> <h1 className='red'>{value.price_change_percentage_24h.toFixed(2)}%</h1></td>

                        // :

                        // <td ><h1 className='green'>{value.price_change_percentage_24h.toFixed(2)}%</h1></td>
                        // }
                        
                        // <td><strong>{getUnit(value.total_volume)}</strong></td>
                        // <td><strong>£{getUnit(value.market_cap).toLocaleString("en-US")}</strong></td>
                        // </tr>                    
                    ))
                    }
                </table>

            </section>
        )
    }
}

export default Popular
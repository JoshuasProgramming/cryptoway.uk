//import react
import React from 'react'

//import react router from 'react-router
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function annual_comp(props:any) {
  return (
      <section className='annual-children'>
        <img src={props.image} alt={props.name + " image"} />
        <h3>{props.name}</h3>
        <h2>APR</h2>

        {
        props.annual < 0.00 ? 
        <h1 className='red'>{props.annual.toFixed(3)}%</h1>

        :

        <h1 className='green'>{props.annual.toFixed(3)}%</h1>
        }
        
      </section>
  )
}

export default annual_comp;
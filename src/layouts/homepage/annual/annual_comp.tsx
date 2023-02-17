import React from 'react'

function annual_comp(props:any) {
  return (
    <section className='annual-children'>
        <img src={props.image} alt={props.name + " image"} />
        <h3>{props.name}</h3>
        <h1>{props.annual}</h1>
    </section>
  )
}

export default annual_comp
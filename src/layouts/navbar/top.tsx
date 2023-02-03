//import useState
import React, { useState } from 'react'

function Top(): JSX.Element {

  const [navbarTop, setNavbarTop] = useState(true);
  return (
    <React.Fragment>
    {navbarTop == true ? 
    <section className="navbar-top">
        <h1>Sign up to start building wealth</h1>
        <h2 className='navbar-top-x-btn' id="navbar_top" onClick={() => setNavbarTop(false)}>X</h2>
    </section>

    :

    false}
    </React.Fragment>
  )
}

export default Top;
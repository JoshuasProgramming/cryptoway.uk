//import useState
import { useState } from 'react'

function Top() {

  const [navbarTop, setNavbarTop] = useState(true);

  return (
    navbarTop == true ? 
    <section className="navbar-top">
        <h1>Sign up to start building wealth</h1>
        <h2 className='navbar-top-x-btn' id="navbar_top" onClick={() => setNavbarTop(false)}>X</h2>
    </section>

    :

    false
    
  )
}

export default Top;
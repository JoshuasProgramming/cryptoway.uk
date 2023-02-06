//import useState
import React, { useState } from 'react'

function Top(): JSX.Element {

  //set boolean variable and function => navbarTop has an initial value of 'true'
  const [navbarTop, setNavbarTop] = useState(true);


  //when navbarTop == 'true' we'll display some HTML content
  //If the user presses the 'X', we'll set navbarTop to 'false'
  //when navbarTop == 'false' we'll remove the HTML content
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
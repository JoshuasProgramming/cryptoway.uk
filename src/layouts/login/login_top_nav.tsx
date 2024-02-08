//import useState state
import React, { useState } from 'react'

function Login_top_nav(): JSX.Element {

  //set boolean variable and function => navbarTop has an initial value of 'true'
  const [navbarTop, setNavbarTop] = useState(true);


  //when navbarTop == 'true' we'll display some HTML content
  //If the user presses the 'X', we'll set navbarTop to 'false', using the 'setNavbarTop(false)' function
  //when navbarTop == 'false' we'll remove the HTML content
  return (
    <React.Fragment>

    {navbarTop == true ? 
    <section className="navbar-top">
        <h1>Don't invest unless you're prepared to lose all the money you invest. This is a high-risk investment.</h1>
        <h2 className='navbar-top-x-btn' id="navbar_top" onClick={() => setNavbarTop(false)}>X</h2>
    </section>

    :

    false}
    
    </React.Fragment>
  )
}

export default Login_top_nav;
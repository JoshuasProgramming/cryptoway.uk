//import bottom
import React, { useEffect } from 'react'

function Bottom() {

  // const removeNav = (boolean:boolean) => {
  //   if(boolean == true){
  //       let nav = document.getElementById('nav') as HTMLElement;
  //       nav.style.transform = 'translateY(200px)';
  //       nav.style.transition = '.25s ease-in-out';
  //   }
  // }
  
  // const addNav = (boolean:boolean) => {
  //   if(boolean == true){
  //       let nav = document.getElementById('nav') as HTMLElement;
  //       nav.style.display = 'flex';
  //       nav.style.transition = '.25s ease-in-out';
  //       nav.style.transform = 'translateY(0px)';
  //   }
  // }
  
  // useEffect(() =>{
  //   let oldPos = 0;
  //   let newPos = 0;
  
  //   window.addEventListener('scroll', function(e) {
  //       newPos = window.pageYOffset;
  
  //       if(oldPos - newPos < 0){
  //           removeNav(true)
  //       } else if(oldPos - newPos > 0){
  //           addNav(true)
  //       }
  
  //       oldPos = newPos;
  //   })
  // })


  return (
    <section className="navbar-bottom" id='nav'>
      <div className="left">
        <h1>CryptoWay</h1>
      </div>

      <div className="middle">
        <h3>Cryptocurrencies</h3>
        <h3>Exchanges</h3>
        <h3>Networth Tracker</h3>
        <h3>Learn</h3>
      </div>

      <div className="right">
        <p>Sign in</p>
        <a>Register</a>
      </div>

    </section>
  )
}

export default Bottom;
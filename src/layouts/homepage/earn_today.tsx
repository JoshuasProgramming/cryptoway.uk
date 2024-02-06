import React, { MouseEvent } from 'react'

function Earn_today() {

  const alertMessage = () => {
    alert("Working");
  }

  return (
    <section className="earn-today">
        <h1>Start earning today</h1>
        <a href="#" onClick={alertMessage}>Sign up Now</a>
    </section>
  )
}

export default Earn_today
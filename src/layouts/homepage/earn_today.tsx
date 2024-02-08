import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import Login from '../../pages/login';

function Earn_today() {

  const alertMessage = () => {
    alert("Working");
  }

  const sendToLogin = () => {
    window.location.href = '../pages/login'
  }

  return (
    <section className="earn-today">
        <h1>Start earning today</h1>
        {/* <a href="#" onClick={sendToLogin}>Sign up Now</a> */}
        <Link to='/pages/login'>Sign up Now</Link>
    </section>
  )
}

export default Earn_today
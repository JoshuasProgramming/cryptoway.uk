//import react
import React from 'react';

//import navigation folder components
import Top from './navbar/top';
import Middle from './navbar/middle';
import Bottom from './navbar/bottom';

//import styles
import '../styles/style.css';

function Navbar() {
  return (
    <>
    <Top />
    <Middle />
    </>
  )
}

export default Navbar
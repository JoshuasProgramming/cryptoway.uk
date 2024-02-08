import react, { useEffect, useState } from 'react';
import '../styles/style.css';

//import react router
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

//import navbar component
import Navbar from '../layouts/Navbar';
import Hero from '../layouts/homepage/hero';
import Info from '../layouts/homepage/Info';
import Need_help from '../layouts/homepage/need_help';
import Earn_today from '../layouts/homepage/earn_today';
import Annual from '../layouts/homepage/annual/annual';
import Popular from '../layouts/homepage/popular';

//import pages
import Login from '../pages/login';
import Coin_page from '../pages/coin_page';

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Info />
        <Popular />
        <Annual />
        <Need_help />
        <Earn_today />
    </>
  )
}

export default Home
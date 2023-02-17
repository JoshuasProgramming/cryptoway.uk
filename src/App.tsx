import react, { useEffect, useState } from 'react';
import './styles/style.css';

//import navbar component
import Navbar from './layouts/Navbar';
import Hero from './layouts/homepage/hero';
import Info from './layouts/homepage/Info';
import Need_help from './layouts/homepage/need_help';
import Earn_today from './layouts/homepage/earn_today';
import Annual from './layouts/homepage/annual/annual';

function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() =>{
    document.title = 'CryptoWay';
  }, []);

  return (
    <>
    <Navbar />
    <Hero />
    <Info/>
    <Need_help/>
    <Earn_today/>
    <Annual/>
    </>
  )
}

export default App;

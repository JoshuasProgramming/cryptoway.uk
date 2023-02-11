import react, { useEffect, useState } from 'react';
import './styles/style.css';

//import navbar component
import Navbar from './layouts/Navbar';
import Hero from './layouts/homepage/hero';
import Info from './layouts/homepage/info';

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
    </>
  )
}

export default App;

import react, { useEffect, useState } from 'react';
import './styles/style.css';

//import navbar component
import Navbar from './layouts/Navbar';

function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() =>{
    document.title = 'CryptoWay';
  }, []);

  return (
    <Navbar/>
  )
}

export default App;

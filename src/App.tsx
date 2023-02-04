import react, { useState } from 'react';
import './styles/style.css';

//import navbar component
import Navbar from './layouts/Navbar';

function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <Navbar/>
  )
}

export default App;

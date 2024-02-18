import react, { useEffect, useState } from 'react';
import './styles/style.css';

//import react router
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

//import navbar component
import Navbar from './layouts/Navbar';
import Hero from './layouts/homepage/hero';
import Info from './layouts/homepage/Info';
import Need_help from './layouts/homepage/need_help';
import Earn_today from './layouts/homepage/earn_today';
import Annual from './layouts/homepage/annual/annual';
import Popular from './layouts/homepage/popular';

//import pages
import Register from './pages/register';
import Login from './pages/login';
import Coin_page from './pages/coin_page';
import Home from './pages/home';
import About from './pages/about';

function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  //title for the page
  useEffect(() =>{
    document.title = 'CryptoWay';
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/pages/register" element={<Register />} />
        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/coin_page/:name" element={<Coin_page />} />
        <Route path="/pages/about" element={<About />} />
      </Routes>
    </Router>
    // <Router>
    //   <Navbar />
    //   <Hero />
    //   <Info />
    //   <Popular />
    //   <Annual />
    //   <Need_help />
    //   <Earn_today />
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/coins" element={<Coin_page />} />
    //   </Routes>
    // </Router>
  );
}

export default App;

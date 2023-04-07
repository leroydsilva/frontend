
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ScrollToTop from './Components/ScrollToTop';
import { useEffect, useState } from 'react';
import "./scss/index.scss";
import scrollreveal from "scrollreveal"
import Footer from './Components/Footer';




function App() {
  const [theme, settheme] = useState("light")
  const changeTheme = () => {
    theme === "dark" ? settheme("light") : settheme("dark")

  }

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        .choose-us-container,
        .products-container,
        footer,
        .title-container,
        container
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  

  return (
    <div data-theme={theme} className='app'>
      {/* <ScrollToTop /> */}
      
      <BrowserRouter> 
        <NavBar  currentTheme={theme} changeTheme={changeTheme} />
        <Routes>
        <Route exact path={"/"} element={<Home/>}/> 
        </Routes>
        {/* <Alert/> */}
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";
import Faq from './pages/Faq';
import Pricing from './pages/Pricing';
import Team from './pages/Team';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/HomeTwo" element={<HomeTwo/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Faq" element={<Faq/>}/>
            <Route path="/Pricing" element={<Pricing/>}/>
            <Route path="/Team" element={<Team/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

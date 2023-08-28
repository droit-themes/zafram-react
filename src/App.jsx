import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";
import Faq from './pages/Faq';
import Pricing from './pages/Pricing';

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/HomeTwo" element={<HomeTwo/>}/>
            <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
     
  )
}

export default App

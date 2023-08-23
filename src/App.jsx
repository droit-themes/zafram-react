import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import HomeTwo from "./pages/HomeTwo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/HomeTwo" element={<HomeTwo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
     
  )
}

export default App

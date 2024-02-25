import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";

import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
      <Routes>

        <Route  path="/" element={<App />} /> 


      </Routes>
    </BrowserRouter>
)

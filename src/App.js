import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Places from './components/Places'

import Home from "./pages/Home";
import Calendar from "./pages/Calendar"
import Explore from "./pages/Explore"

function App() {
  return (
    <div>
      <h1>Where should we eat?</h1>
          <div className="container">
            <Places/>
          </div>
          
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Router, Routes, Route } from "react-router-dom";
import './App.css';
import Places from './components/Places'

import Home from "./pages/Home";
import Calendar from "./pages/Calendar"
import Explore from "./pages/Explore"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;

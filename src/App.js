import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

// Components
import Places from './components/Places'
import Navbar from './components/Navbar';

// Pages
import Home from "./pages/Home";
import Calendar from "./pages/Calendar"
import Explore from "./pages/Explore"
import Settings from "./pages/Settings"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<Home />} />
      </Routes>

      <Navbar />

      <div className="container">
        <Places/>
      </div>

    </div>
  );
}

export default App;

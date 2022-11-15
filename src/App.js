import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

// Components
import Places from './components/Places'
import Navbar from './components/Navbar';

// Pages
import Home from "./pages/Home";
import MyCalendar from "./pages/calendar/Calendar"
import Explore from "./pages/Explore/Explore"
import SearchResult from "./pages/SearchResult"
import Settings from "./pages/Settings"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<SearchResult />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<Home />} />
      </Routes>

      <Navbar />

    </div>
  );
}

export default App;

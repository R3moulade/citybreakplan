import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from "./pages/Home";
import MyCalendar from "./pages/calendar/Calendar"
import Save from './pages/calendar/Save';
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
        <Route path="/calendar/:id" element={<Save />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<Home />} />
      </Routes>

      <Navbar />

    </div>
  );
}

export default App;

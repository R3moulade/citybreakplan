import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from "./pages/Home";
import MyCalendar from "./pages/calendar/Calendar"
import Save from './pages/calendar/Save';
import Categories from "./pages/Categories"
import SearchResult from "./pages/SearchResult"
import Favorite from "./pages/Favorite"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/discover" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/discover/:id" element={<SearchResult />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/calendar/:id" element={<Save />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/*" element={<Home />} />
      </Routes>

      <Navbar />

    </div>
  );
}

export default App;

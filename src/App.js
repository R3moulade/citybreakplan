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
          
          
          <Route path="/categories" element={<Categories />} />
          <Route path="/places-to-eat" element={<PlacesToEat />} />
            <Route path="/places-to-eat/:id" element={<PlaceToEat />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<Event />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/attractions/:id" element={<Attraction />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:id" element={<Activity />} />
          
          
          
          
          
          
      </Routes>

      <Navbar />

    </div>
  );
}

export default App;

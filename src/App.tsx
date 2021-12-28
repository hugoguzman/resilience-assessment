import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import TopAppBar from './Components/AppBar';
import Home from './Routes/Home';
import HealthandWellbeing from './Routes/HealthandWellbeing';
import EconomyandSociety from './Routes/EconomyandSociety';
import InfrastructureandEnvironment from './Routes/InfrastructureandEnvironment';
import LeadershipandStrategy from './Routes/LeadershipandStrategy';

function App() {
  return (
    <div className="App">
      <TopAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="health-and-wellbeing" element={<HealthandWellbeing />} />
        <Route path="economy-and-society" element={<EconomyandSociety />} />
        <Route path="infrastructure-and-environment" element={<InfrastructureandEnvironment />} />
        <Route path="leadership-and-strategy" element={<LeadershipandStrategy />} />
      </Routes>
    </div>
  );
}

export default App;
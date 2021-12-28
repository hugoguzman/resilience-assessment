import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import TopAppBar from './AppBar';
import Home from './Home';
import HealthandWellbeing from './HealthandWellbeing';
import EconomyandSociety from './EconomyandSociety';
import InfrastructureandEnvironment from './InfrastructureandEnvironment';
import LeadershipandStrategy from './LeadershipandStrategy';

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

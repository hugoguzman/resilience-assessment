import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import TopAppBar from './Components/AppBar';
import Home from './Routes/Home';
import HealthandWellbeing from './Routes/HealthandWellbeing';
import { EconomyandSociety } from './Routes/EconomyandSociety';
import InfrastructureandEnvironment from './Routes/InfrastructureandEnvironment';
import LeadershipandStrategy from './Routes/LeadershipandStrategy';


const user = {
  name: 'Test user',
  username: '@testuser'
}



function App() {
  return (
    <div className="App">
      <TopAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="health-and-wellbeing" element={<HealthandWellbeing />} />
        <Route path="economy-and-society" element={<EconomyandSociety user={user} />} />
        <Route path="infrastructure-and-environment" element={<InfrastructureandEnvironment />} />
        <Route path="leadership-and-strategy" element={<LeadershipandStrategy />} />
      </Routes>
      <footer style={{background: 'rgba(0,0,0, 0.1)'}}> ©FIU 2021</footer>
    </div>
  );
}

export default App;
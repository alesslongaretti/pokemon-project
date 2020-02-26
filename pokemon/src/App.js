import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import BugType from './components/BugType';
import DarkType from './components/DarkType';
import DragonType from './components/DragonType';
import ElectricType from './components/ElectricType';
import FairyType from './components/FairyType';
import FightingType from './components/FightingType';
import FireType from './components/FireType';
import FlyingType from './components/FlyingType';
import GhostType from './components/GhostType';
import GrassType from './components/GrassType';
import GroundType from './components/GroundType';
import IceType from './components/IceType';
import NormalType from './components/NormalType';
import PoisonType from './components/PoisonType';
import PsychicType from './components/PsychicType';
import RockType from './components/RockType';
import SteelType from './components/SteelType';
import WaterType from './components/WaterType';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <BugType />
      <DarkType />
      <DragonType />
      <ElectricType />
      <FairyType />
      <FightingType />
      <FireType />
      <FlyingType />
      <GhostType />
      <GrassType />
      <GroundType />
      <IceType />
      <NormalType />
      <PoisonType />
      <PsychicType />
      <RockType />
      <SteelType />
      <WaterType />
    </div>
  );
}

export default App;

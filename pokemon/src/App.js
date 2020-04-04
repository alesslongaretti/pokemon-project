import React, { useEffect } from 'react';
import BugType from './components/types/BugType';
import DragonType from './components/types/DragonType';
import ElectricType from './components/types/ElectricType';
import FairyType from './components/types/FairyType';
import FightingType from './components/types/FightingType';
import FireType from './components/types/FireType';
import FlyingType from './components/types/FlyingType';
import GhostType from './components/types/GhostType';
import GrassType from './components/types/GrassType';
import GroundType from './components/types/GroundType';
import IceType from './components/types/IceType';
import NormalType from './components/types/NormalType';
import PoisonType from './components/types/PoisonType';
import PsychicType from './components/types/PsychicType';
import RockType from './components/types/RockType';
import SteelType from './components/types/SteelType';
import WaterType from './components/types/WaterType';
import Dashboard from './components/Dashboard';
import SearchByType from './components/SearchByType';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { connect } from "react-redux";
import { getPokemons } from "./components/actions/actions";

const App = props => {
  useEffect(() => {
    props.getPokemons();
  }, [])

  return (
    <Router className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/types" component={SearchByType} />
        <Route exact path="/bug-type" component={BugType} />
        <Route exact path="/dragon-type" component={DragonType} />
        <Route exact path="/electric-type" component={ElectricType} />
        <Route exact path="/fairy-type" component={FairyType} />
        <Route exact path="/fighting-type" component={FightingType} />
        <Route exact path="/fire-type" component={FireType} />
        <Route exact path="/flying-type" component={FlyingType} />
        <Route exact path="/ghost-type" component={GhostType} />
        <Route exact path="/grass-type" component={GrassType} />
        <Route exact path="/ground-type" component={GroundType} />
        <Route exact path="/ice-type" component={IceType} />
        <Route exact path="/normal-type" component={NormalType} />
        <Route exact path="/poison-type" component={PoisonType} />
        <Route exact path="/psychic-type" component={PsychicType} />
        <Route exact path="/rock-type" component={RockType} />
        <Route exact path="/steel-type" component={SteelType} />
        <Route exact path="/water-type" component={WaterType} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default connect(null, { getPokemons })(App);

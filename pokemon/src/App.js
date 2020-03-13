import React, { useEffect } from 'react';
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
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

import { connect } from "react-redux";
import { getPokemons } from "./components/actions/actions";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray;
  font-size: 18px;
  margin-left: 80%;
`;

const App = props => {
  useEffect(() => {
    props.getPokemons();
  }, [])

  return (
    <Router className="App">
      <StyledLink className="home-link" to="/">Home</StyledLink>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/bug-type" component={BugType} />
        <Route exact path="/dark-type" component={DarkType} />
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
    </Router>
  );
}

export default connect(null, { getPokemons })(App);

import React from "react";
import Bug from "../Images/Bug.png";
import Dark from '../Images/Dark.png';
import Dragon from '../Images/Dragon.png';
import Electric from '../Images/Electric.png';
import Fairy from '../Images/Fairy.png';
import Fighting from '../Images/Fighting.png';
import Fire from '../Images/Fire.png';
import Flying from '../Images/Flying.png';
import Ghost from '../Images/Ghost.png';
import Grass from '../Images/Grass.png';
import Ground from '../Images/Ground.png';
import Ice from '../Images/Ice.png';
import Normal from '../Images/Normal.png';
import Poison from '../Images/Poison.png';
import Psychic from '../Images/Psychic.png';
import Rock from '../Images/Rock.png';
import Steel from '../Images/Steel.png';
import Water from '../Images/Water.png';
import Pokemons from "../Images/Pokemons.jpeg";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <img src={Pokemons} alt="pokemons" />
      <div>
        <Link className="link" to="/bug-type">
          <img src={Bug} alt="bug type icon" />
        </Link>
        <Link className="link" to="/dark-type">
          <img src={Dark} alt="dark type icon" />
        </Link>
        <Link className="link" to="/dragon-type">
          <img src={Dragon} alt="dragon type icon" />
        </Link>
        <Link className="link" to="/electric-type">
          <img src={Electric} alt="electric type icon" />
        </Link>
        <Link className="link" to="/fairy-type">
          <img src={Fairy} alt="fairy type icon" />
        </Link>
        <Link className="link" to="/fighting-type">
          <img src={Fighting} alt="fighting type icon" />
        </Link>
        <Link className="link" to="/fire-type">
          <img src={Fire} alt="fire type icon" />
        </Link>
        <Link className="link" to="/flying-type">
          <img src={Flying} alt="flying type icon" />
        </Link>
        <Link className="link" to="/ghost-type">
          <img src={Ghost} alt="ghost type icon" />
        </Link>
        <Link className="link" to="/grass-type">
          <img src={Grass} alt="grass type icon" />
        </Link>
        <Link className="link" to="/ground-type">
          <img src={Ground} alt="ground type icon" />
        </Link>
        <Link className="link" to="/ice-type">
          <img src={Ice} alt="Ice type icon" />
        </Link>
        <Link className="link" to="/normal-type">
          <img src={Normal} alt="normal type icon" />
        </Link>
        <Link className="link" to="/poison-type">
          <img src={Poison} alt="poison type icon" />
        </Link>
        <Link className="link" to="/psychic-type">
          <img src={Psychic} alt="psychic type icon" />
        </Link>
        <Link className="link" to="/rock-type">
          <img src={Rock} alt="rock type icon" />
        </Link>
        <Link className="link" to="/steel-type">
          <img src={Steel} alt="steel type icon" />
        </Link>
        <Link className="link" to="/water-type">
          <img src={Water} alt="water type icon" />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

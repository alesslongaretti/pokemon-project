import React from "react";
import Ghost from '../Images/Ghost.png';

const GhostType = () => {
  return (
    <div>
      <img src={Ghost} alt="ghost type icon" />
      <p>
        Ghost-type moves are super effective against Psychic-type Pokémon and
        its own type, but they have no effect on Normal-type Pokémon. However,
        this is a double-edged sword, as Ghost-type Pokémon are immune to
        Normal-type attacks as well, making them good walls against Normal-type
        Pokémon. Even so, it is also immune to Fighting-type attacks.
      </p>
    </div>
  );
};

export default GhostType;

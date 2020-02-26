import React from "react";
import Flying from "../Images/Flying.png";

const FlyingType = () => {
  return (
    <div>
      <img src={Flying} alt="flying type icon" />
      <p>
        Flying-type Pokémon are usually Pokémon that fly or resemble birds, so
        they are immune to Ground-type attacks, But weak to Rock, Ice and
        Electric-Type Moves. Most Flying-type Pokémon are dual-type Pokémon,
        with the most common ones being dual Normal/Flying-type Pokémon.
        Flying-type moves are super effective against Grass, Bug, and
        Fighting-type Pokémon.
      </p>
    </div>
  );
};

export default FlyingType;

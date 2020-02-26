import React from "react";
import Dragon from "../Images/Dragon.png";

const DragonType = () => {
  return (
    <div>
      <img src={Dragon} alt="dragon type icon" />
      <p>
        Dragon-type moves are only super effective against its own type, yet
        Dragon-type Pokémon have powerful stats to compensate. However, most
        final form Dragon-type Pokémon have double weaknesses to Ice-type moves
        due to their secondary types, and Dragon-type moves have no effect on
        Fairy-type Pokémon.
      </p>
    </div>
  );
};

export default DragonType;


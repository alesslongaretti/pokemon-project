import React from "react";
import Fire from "../Images/Fire.png";

const FireType = () => {
  return (
    <div>
      <img src={Fire} alt="fire type icon" />
      <p>
        The Fire type is a mostly all-out offensive type, and very powerful,
        given that most of the Pokémon belonging to this type are very strong
        offensively, but this comes at a cost of being fragile defensively,
        making many Fire-type Pokémon "glass cannons". However, they cannot be
        burnt by any means. Fire-type moves are super effective against Grass,
        Ice, Bug and Steel-type Pokémon, but do not resist well to water-type
        Pokémon, as water can put out fire. Fire-type Pokémon is also weak to
        Rock and Ground-Type Pokémon.
      </p>
    </div>
  );
};

export default FireType;

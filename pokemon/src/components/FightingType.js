import React from "react";
import Fighting from "../Images/Fighting.png";

const FightingType = () => {
  return (
    <div>
      <img src={Fighting} alt="fighting type icon" />
      <p>
        The Fighting type is one of the strongest types, as the attacks are
        super effective against Normal, Ice, Rock, Dark and Steel-type Pokémon,
        tying with Ground for causing super effective damage against most types.
        Its unique power against Normal-type is what makes Fighting-type Pokémon
        shine. Unfortunately, their power is kept in check by attacks of
        Flying-type, Psychic-type and the new Fairy-type. It also has no effect
        on Ghost-type Pokémon.
      </p>
    </div>
  );
};

export default FightingType;

import React from "react";
import Electric from "../Images/Electric.png";

const ElectricType = () => {
  return (
    <div>
      <img src={Electric} alt="electric type icon" />
      <p>
        Electric-type moves are super effective against Water and Flying-type
        Pokémon. Pokémon that belong to this type are immune to paralysis. As
        ground insulates electricity, Electric-type moves have no effect on
        Ground-type Pokémon, and Ground-type attacks are also the only
        weaknesses of Electric-type Pokémon.
      </p>
    </div>
  );
};

export default ElectricType;


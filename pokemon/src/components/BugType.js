import React from "react";
import Bug from "../Images/Bug.png";

const BugType = () => {
  return (
    <div>
      <img src={Bug} alt="bug type icon" />
      <p>
        The Bug type is mostly recognized by having early evolutions, with 3
        triple-stage evolution families in this type sharing a record of the
        earliest evolutionary lines to reach their final forms among all Pokémon
        that evolve by levelling up. The moves of Bug-type Pokémon are super
        effective against Grass, Psychic and Dark-type Pokémon, making them weak
        but underestimated. However, Bug-type Pokémon are weak to common Fire,
        Flying, and Rock-type moves.
      </p>
    </div>
  );
};

export default BugType;


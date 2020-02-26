import React from "react";
import Dark from "../Images/Dark.png";

const DarkType = () => {
  return (
    <div>
      <img src={Dark} alt="dark type icon" />
      <p>
        Dark-type attacks are super effective against Psychic and Ghost-type
        Pokémon. Pokémon that belong to this type are immune to Psychic-type
        attacks as well. They were added to eliminate the dominance of
        Psychic-type Pokémon in the earliest Pokémon games. Many Dark-type moves
        can be said to play "dirty", such as Foul Play, Flatter, Parting Shot,
        Topsy-Turvy, Torment and Taunt.
      </p>
    </div>
  );
};

export default DarkType;

import React from "react";
import Fairy from "../Images/Fairy.png";

const FairyType = () => {
  return (
    <div>
      <img src={Fairy} alt="fairy type icon" />
      <p>
        To turn the tides for the everlasting domination of the Dragon-type
        Pokémon, the Fairy type was added to balance the meta. Fairy-type
        attacks are super effective against Fighting, Dragon and Dark-type
        Pokémon. Fairy-type Pokémon are also immune to Dragon-type moves.
      </p>
    </div>
  );
};

export default FairyType;

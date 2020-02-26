import React from 'react';
import Psychic from '../Images/Psychic.png';

const PsychicType = () => {
    return (
        <div>
            <img src={Psychic} alt="Psychic type icon" />
            <p>
            Psychic-type attacks are super effective against Fighting-type and Poison-type Pokémon. However, they have no effect on Dark-type Pokémon. It was the most dominant type in the earliest Pokémon games due to broken mechanics and coding errors, and even with the error fixed, the Special Attack stats of Psychic-type Pokémon are still not to be underestimated.
            </p>
        </div>
    )
}

export default PsychicType;
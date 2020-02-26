import React from 'react';
import Normal from '../Images/Normal.png';

const NormalType = () => {
    return (
        <div>
            <img src={Normal} alt="Normal type icon" />
            <p>
            Normal-type Pokémon usually have moves based on standard attacks, such as tackles and scratches, but they may also possess some powerful moves like Giga Impact and Hyper Beam. Normal-type moves are not super effective against anything and are resisted by Rock and Steel-type Pokémon. Normal-type and Ghost-type attacks have no effect on each other.
            </p>
        </div>
    )
}

export default NormalType;
import React from 'react';
import Rock from '../Images/Rock.png';

const RockType = () => {
    return (
        <div>
            <img src={Rock} alt="Rock type icon" />
            <p>
            Rock-type Pokémon are mostly slow and heavily rely on their Physical Attack and Defense stats, but with the glaring weaknesses to mostly Special Water-type and Grass-type moves, their power is greatly reduced. Rock-type attacks are super effective against Fire, Ice, Flying and Bug-type Pokémon.
            </p>
        </div>
    )
}

export default RockType;
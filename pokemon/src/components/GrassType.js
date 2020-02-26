import React from 'react';
import Grass from '../Images/Grass.png';

const GrassType = () => {
    return (
        <div>
            <img src={Grass} alt="grass type icon" />
            <p>
            The Grass type is a type that has its own strength hindered by many weaknesses, reflecting the fragility of nature. The moves of this type are super effective against Water, Ground, and Rock-type Pokémon, but Grass-type Pokémon are weak to attacks from the following 5 types: Fire, Flying, Bug, Ice and Poison.
            </p>
        </div>
    )
}

export default GrassType;
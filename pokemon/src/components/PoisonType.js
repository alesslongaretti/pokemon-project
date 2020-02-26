import React from 'react';
import Poison from '../Images/Poison.png';

const PoisonType = () => {
    return (
        <div>
            <img src={Poison} alt="Poison type icon" />
            <p>
            Poison-type Pokémon, with their moves being only super effective against Grass-type and the newly-introduced Fairy-type Pokémon, are mostly used as "trouble-makers" by inducing status ailments, especially Poison and Bad Poison, while also being immune to both of them. However, their attacks have no effect on Steel-type Pokémon.
            </p>
        </div>
    )
}

export default PoisonType;
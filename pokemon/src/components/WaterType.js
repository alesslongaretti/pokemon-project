import React from 'react';
import Water from '../Images/Water.png';

const WaterType = () => {
    return (
        <div>
            <img src={Water} alt="Water type icon" />
            <p>
            The Water type is a very balanced type, as well as being the most common out of the 18 types. Water-type Pokémon are super effective against Fire-type, Rock-type and Ground-type Pokémon, but are weak to Electric-type and Grass-type attacks. Water types also resist Fire-type, Steel-type, Ice-type, and Water-type moves, making it a semi-defensive typing.
            </p>
        </div>
    )
}

export default WaterType;
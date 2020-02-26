import React from 'react';
import Ground from '../Images/Ground.png';

const GroundType = () => {
    return (
        <div>
            <img src={Ground} alt="ground type icon" />
            <p>
            The Ground type is also a mostly slow and physical type, hitting Electric, Fire, Poison, Rock and Steel super effectively while being immune to Electric-type attacks. However, similar to Rock-type, the power of Ground is hindered by the major weaknesses against Water and Grass, as well as having no effect on Flying-type Pokémon and those with the Ability Levitate.
            </p>
        </div>
    )
}

export default GroundType;
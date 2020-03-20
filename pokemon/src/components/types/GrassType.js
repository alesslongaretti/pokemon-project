import React from 'react';
import Grass from '../../Images/Grass.png';
import styled from 'styled-components';
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
text-transform: capitalize;
`;

const StyledIcon = styled.img`
  width: 20%;
  margin-top: 20px;
  border-radius: 50%;
  box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.9);
`;

const GrassType = props => {

    if (props.pokemonData[0] === undefined) {
        props.pokemonData.splice(0)
    }

    return (
        <div>
            <StyledIcon src={Grass} alt="grass type icon" />
            <StyledParagraph>
                The Grass type is a type that has its own strength hindered by many weaknesses, reflecting the fragility of nature. The moves of this type are super effective against Water, Ground, and Rock-type Pokémon, but Grass-type Pokémon are weak to attacks from the following 5 types: Fire, Flying, Bug, Ice and Poison.
            </StyledParagraph>
            <div>
                {props.pokemonData &&
                    props.pokemonData.map((pokemon, i) => {
                        return (
                            <div key={i}>
                                {pokemon.types.map((type, i) => {
                                    if (type.type.name.includes("grass")) {
                                        return (
                                            <div key={i}>
                                                <StyledName>{pokemon.name}</StyledName>
                                                <img src={pokemon.picture} alt="pokemon" />
                                                <p>Height: {((pokemon.height/ 10).toFixed(1))}m</p>
                                                <p>Weight: {((pokemon.weight/ 10).toFixed(1))}Kg</p>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state)
    return {
        pokemonData: state.pokemonData
    }
}

export default connect(mapStateToProps, {})(GrassType);
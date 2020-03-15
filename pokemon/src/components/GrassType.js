import React from 'react';
import Grass from '../Images/Grass.png';
import styled from 'styled-components';
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
text-transform: capitalize;
`;

const GrassType = props => {

    if (props.pokemonData[0] === undefined) {
        props.pokemonData.splice(0)
    }

    return (
        <div>
            <img src={Grass} alt="grass type icon" />
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
                                                <p>Height: {pokemon.height}</p>
                                                <p>Weight: {pokemon.weight}</p>
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
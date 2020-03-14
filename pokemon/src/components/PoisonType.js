import React, { useEffect } from 'react';
import Poison from '../Images/Poison.png';
import styled from "styled-components";
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledPoisonTitle = styled.h3`
text-transform: capitalize;
`;

const PoisonType = (props) => {
    useEffect(() => {

    }, [])

    if (props.pokemonData[0] === undefined) {
        props.pokemonData.splice(0)
    }
    return (
        <div>
            <img src={Poison} alt="Poison type icon" />
            <StyledParagraph>
                Poison-type Pokémon, with their moves being only super effective against Grass-type and the newly-introduced 
                Fairy-type Pokémon, are mostly used as "trouble-makers" by inducing status ailments, especially Poison and Bad Poison, 
                while also being immune to both of them. However, their attacks have no effect on Steel-type Pokémon.
            </StyledParagraph>
            <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("poison")) {
                  return (
                  <div key={i}>
                    <StyledPoisonTitle>{pokemon.name}</StyledPoisonTitle>
                    <img src={pokemon.picture} alt="pokemon" />
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    </div>
                )}})}
              </div>
            );
          })}
      </div>
        </div>
    )
};

const mapStateToProps = state => {
    console.log(state)
    return {
      pokemonData: state.pokemonData
    }
  }

export default connect(mapStateToProps,{}) (PoisonType);
import React from "react";
import Fighting from "../Images/Fighting.png";
import styled from 'styled-components';
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
text-transform: capitalize;
`;

const FightingType = props => {

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }

  return (
    <div>
      <img src={Fighting} alt="fighting type icon" />
      <StyledParagraph>
        The Fighting type is one of the strongest types, as the attacks are
        super effective against Normal, Ice, Rock, Dark and Steel-type Pokémon,
        tying with Ground for causing super effective damage against most types.
        Its unique power against Normal-type is what makes Fighting-type Pokémon
        shine. Unfortunately, their power is kept in check by attacks of
        Flying-type, Psychic-type and the new Fairy-type. It also has no effect
        on Ghost-type Pokémon.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("fighting")) {
                  return (
                  <div key={i}>
                    <StyledName>{pokemon.name}</StyledName>
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
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    pokemonData: state.pokemonData
  }
}

export default connect(mapStateToProps, {})(FightingType);

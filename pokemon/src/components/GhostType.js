import React from "react";
import Ghost from '../Images/Ghost.png';
import styled from 'styled-components';
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
text-transform: capitalize;
`;

const GhostType = props => {

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }

  return (
    <div>
      <img src={Ghost} alt="ghost type icon" />
      <StyledParagraph>
        Ghost-type moves are super effective against Psychic-type Pokémon and
        its own type, but they have no effect on Normal-type Pokémon. However,
        this is a double-edged sword, as Ghost-type Pokémon are immune to
        Normal-type attacks as well, making them good walls against Normal-type
        Pokémon. Even so, it is also immune to Fighting-type attacks.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("ghost")) {
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

export default connect(mapStateToProps, {})(GhostType);
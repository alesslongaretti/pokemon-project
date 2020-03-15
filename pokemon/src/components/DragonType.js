import React from "react";
import Dragon from "../Images/Dragon.png";
import styled from 'styled-components';
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
text-transform: capitalize;
`;

const DragonType = props => {

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }

  return (
    <div>
      <img src={Dragon} alt="dragon type icon" />
      <StyledParagraph>
        Dragon-type moves are only super effective against its own type, yet
        Dragon-type Pokémon have powerful stats to compensate. However, most
        final form Dragon-type Pokémon have double weaknesses to Ice-type moves
        due to their secondary types, and Dragon-type moves have no effect on
        Fairy-type Pokémon.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("dragon")) {
                  return (
                  <div key={i}>
                    <StyledName>{pokemon.name}</StyledName>
                    <img src={pokemon.picture} alt="pokemon" />
                    <p>Height: {((pokemon.height/ 10).toFixed(1))}m</p>
                    <p>Weight: {((pokemon.weight/ 10).toFixed(1))}Kg</p>
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

export default connect(mapStateToProps, {})(DragonType);


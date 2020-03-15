import React from "react";
import Flying from "../Images/Flying.png";
import styled from 'styled-components';
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
text-transform: capitalize;
`;

const FlyingType = props => {

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }

  return (
    <div>
      <img src={Flying} alt="flying type icon" />
      <StyledParagraph>
        Flying-type Pokémon are usually Pokémon that fly or resemble birds, so
        they are immune to Ground-type attacks, But weak to Rock, Ice and
        Electric-Type Moves. Most Flying-type Pokémon are dual-type Pokémon,
        with the most common ones being dual Normal/Flying-type Pokémon.
        Flying-type moves are super effective against Grass, Bug, and
        Fighting-type Pokémon.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("flying")) {
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

export default connect(mapStateToProps, {})(FlyingType);
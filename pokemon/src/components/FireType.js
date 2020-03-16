import React from "react";
import Fire from "../Images/Fire.png";
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

const FireType = props => {

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }

  return (
    <div>
      <StyledIcon src={Fire} alt="fire type icon" />
      <StyledParagraph>
        The Fire type is a mostly all-out offensive type, and very powerful,
        given that most of the Pokémon belonging to this type are very strong
        offensively, but this comes at a cost of being fragile defensively,
        making many Fire-type Pokémon "glass cannons". However, they cannot be
        burnt by any means. Fire-type moves are super effective against Grass,
        Ice, Bug and Steel-type Pokémon, but do not resist well to water-type
        Pokémon, as water can put out fire. Fire-type Pokémon is also weak to
        Rock and Ground-Type Pokémon.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("fire")) {
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

export default connect(mapStateToProps, {})(FireType);
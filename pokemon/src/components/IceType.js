import React from "react";
import Ice from "../Images/Ice.png";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
  text-transform: capitalize;
`;

const IceType = props => {
  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0);
  }

  return (
    <div>
      <img src={Ice} alt="ice type icon" />
      <StyledParagraph>
        The Ice type is another fragile type, being weak to the all-out
        offensive Fire-type and Fighting-type attacks, as well as Rock-type and
        Steel-type moves. Luckily, its unique strength on being the nightmare of
        Dragon-type Pokémon comes in handy. In addition, Ice-type attacks also
        hit Grass-type, Flying-type and Ground-type Pokémon super effectively.
        The Ice type is a usually bad type for defensive Pokémon as it only
        resists itself.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("ice")) {
                    return (
                      <div key={i}>
                        <StyledName>{pokemon.name}</StyledName>
                        <img src={pokemon.picture} alt="pokemon" />
                        <p>Height: {pokemon.height}</p>
                        <p>Weight: {pokemon.weight}</p>
                      </div>
                    );
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
  console.log(state);
  return {
    pokemonData: state.pokemonData
  };
};

export default connect(mapStateToProps, {})(IceType);

import React from "react";
import Rock from "../Images/Rock.png";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
  text-transform: capitalize;
`;

const RockType = props => {
  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0);
  }

  return (
    <div>
      <img src={Rock} alt="rock type icon" />
      <StyledParagraph>
        Rock-type Pokémon are mostly slow and heavily rely on their Physical
        Attack and Defense stats, but with the glaring weaknesses to mostly
        Special Water-type and Grass-type moves, their power is greatly reduced.
        Rock-type attacks are super effective against Fire, Ice, Flying and
        Bug-type Pokémon.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("rock")) {
                    return (
                      <div key={i}>
                        <StyledName>{pokemon.name}</StyledName>
                        <img src={pokemon.picture} alt="pokemon" />
                        <p>Height: {((pokemon.height/ 10).toFixed(1))}m</p>
                        <p>Weight: {((pokemon.weight/ 10).toFixed(1))}Kg</p>
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

export default connect(mapStateToProps, {})(RockType);

import React from "react";
import Normal from "../Images/Normal.png";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
  text-transform: capitalize;
`;

const NormalType = props => {
  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0);
  }

  return (
    <div>
      <img src={Normal} alt="normal type icon" />
      <StyledParagraph>
        Normal-type Pokémon usually have moves based on standard attacks, such
        as tackles and scratches, but they may also possess some powerful moves
        like Giga Impact and Hyper Beam. Normal-type moves are not super
        effective against anything and are resisted by Rock and Steel-type
        Pokémon. Normal-type and Ghost-type attacks have no effect on each
        other.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("normal")) {
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

export default connect(mapStateToProps, {})(NormalType);

import React from "react";
import Electric from "../Images/Electric.png";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
text-transform: capitalize;
`;

const ElectricType = (props) => {

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }
  return (
    <div>
      <img src={Electric} alt="electric type icon" />
      <StyledParagraph>
        Electric-type moves are super effective against Water and Flying-type
        Pokémon. Pokémon that belong to this type are immune to paralysis. As
        ground insulates electricity, Electric-type moves have no effect on
        Ground-type Pokémon, and Ground-type attacks are also the only
        weaknesses of Electric-type Pokémon.
              </StyledParagraph>
      {props.pokemonData &&
        props.pokemonData.map((pokemon, i) => {
          return (
            <div key={i}>
              {pokemon.types.map((type, i) => {
                if (type.type.name.includes("electric")) {
                  return (
                    <div key={i}>
                      <StyledName>{pokemon.name}</StyledName>
                      <img src={pokemon.picture} alt="pokemon" />
                      <p>Height: {((pokemon.height/ 10).toFixed(1))}m</p>
                      <p>Weight: {((pokemon.weight/ 10).toFixed(1))}Kg</p>
                    </div>
                  )
                }
              })}
            </div>
          );
        })}
    </div>
  )
};

const mapStateToProps = state => {
  console.log(state)
  return {
    pokemonData: state.pokemonData
  }
}

export default connect(mapStateToProps, {})(ElectricType);


import React from "react";
import Steel from "../../Images/Steel.png";
import styled from "styled-components";
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

const SteelType = props => {
  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0);
  }

  return (
    <div>
      <StyledIcon src={Steel} alt="steel type icon" />
      <StyledParagraph>
        Reflecting the indestructible nature of metal, the Steel type features
        the greatest defenses of all types, resisting 10 out of 18 types, in
        addition to the complete immunity to Poison-type attacks, including both
        Poison and Bad Poison status ailments, barring those inflicted by a
        Pokémon with the ability Corrosion. Steel-type moves are super effective
        against Ice, Rock and Fairy-type Pokémon. Steel-type Pokémon are not
        usually used offensively until the Fairy type was introduced, but they
        have always been great defensive physical walls.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("steel")) {
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

export default connect(mapStateToProps, {})(SteelType);

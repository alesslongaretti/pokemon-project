import React from "react";
import Poison from "../Images/Poison.png";
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

const PoisonType = props => {
  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0);
  }
  return (
    <div>
      <StyledIcon src={Poison} alt="Poison type icon" />
      <StyledParagraph>
        Poison-type Pokémon, with their moves being only super effective against
        Grass-type and the newly-introduced Fairy-type Pokémon, are mostly used
        as "trouble-makers" by inducing status ailments, especially Poison and
        Bad Poison, while also being immune to both of them. However, their
        attacks have no effect on Steel-type Pokémon.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("poison")) {
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

export default connect(mapStateToProps, {})(PoisonType);

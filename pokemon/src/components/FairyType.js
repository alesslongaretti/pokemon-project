import React from "react";
import Fairy from "../Images/Fairy.png";
import styled from 'styled-components';
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
text-transform: capitalize;
`;

const FairyType = props => {

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }

  return (
    <div>
      <img src={Fairy} alt="fairy type icon" />
      <StyledParagraph>
      To turn the tides for the everlasting domination of the Dragon-type
        Pokémon, the Fairy type was added to balance the meta. Fairy-type
        attacks are super effective against Fighting, Dragon and Dark-type
        Pokémon. Fairy-type Pokémon are also immune to Dragon-type moves.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("fairy")) {
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

export default connect(mapStateToProps, {})(FairyType);
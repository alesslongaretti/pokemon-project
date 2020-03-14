import React, { useEffect } from "react";
import Dark from "../Images/Dark.png";
import styled from 'styled-components';
import { connect } from "react-redux";


const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledBugTitle = styled.h3`
text-transform: capitalize;
`;

const DarkType = (props) => {
 useEffect(() => {
  
  }, [])

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }


  return (
    <div>
      <img src={Dark} alt="dark type icon" />
      <StyledParagraph>
        Dark-type attacks are super effective against Psychic and Ghost-type
        Pokémon. Pokémon that belong to this type are immune to Psychic-type
        attacks as well. They were added to eliminate the dominance of
        Psychic-type Pokémon in the earliest Pokémon games. Many Dark-type moves
        can be said to play "dirty", such as Foul Play, Flatter, Parting Shot,
        Topsy-Turvy, Torment and Taunt.
      </StyledParagraph>
      <div>
      {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("dark")) {
                    
                  return (
                  <div key={i}>
                    <StyledBugTitle>{pokemon.name}</StyledBugTitle>
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

export default connect(mapStateToProps, {}) (DarkType);

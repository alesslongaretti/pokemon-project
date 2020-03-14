import React, { useEffect } from "react";
import { getPokemons } from './actions/actions';
import { connect } from 'react-redux';

import Bug from "../Images/Bug.png";
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledBugTitle = styled.h3`
text-transform: capitalize;
`;

const BugType = props => {
  useEffect(() => {
    props.getPokemons();
  }, []);

  return (
    <div>
     
      <img src={Bug} alt="bug type icon" />
      <StyledParagraph>
        The Bug type is mostly recognized by having early evolutions, with 3
        triple-stage evolution families in this type sharing a record of the
        earliest evolutionary lines to reach their final forms among all Pokémon
        that evolve by levelling up. The moves of Bug-type Pokémon are super
        effective against Grass, Psychic and Dark-type Pokémon, making them weak
        but underestimated. However, Bug-type Pokémon are weak to common Fire,
        Flying, and Rock-type moves.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("bug")) {
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
  console.log(state.pokemon)
  return {
    pokemon: state.pokemon
  };
};

export default connect(mapStateToProps, { getPokemons })(BugType);


import React, { useEffect } from "react";
import { getPokemons } from './actions/actions';
import { connect } from 'react-redux';

import Bug from "../Images/Bug.png";
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
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
        <h3>pokemon name</h3>
        <p>Sprites - front_default</p>
        <p>types:</p>
        <p>weight:</p>
        <p>height:</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
};

export default connect(mapStateToProps, { getPokemons })(BugType);


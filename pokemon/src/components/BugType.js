import React, { useEffect } from "react";
import Bug from "../Images/Bug.png";
import styled from 'styled-components';
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const BugType = props => {
  useEffect(() => {
  
  }, [])

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
      {props.pokemonName && props.pokemonName.map(pokemon => (
        <div key={pokemon}>
         <p>{pokemon}</p>
         </div>
      ))
      }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    pokemonName: state.pokemonName
  }
}

export default connect(mapStateToProps, {})(BugType);


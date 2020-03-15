import React from "react";
import Ground from "../Images/Ground.png";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
  text-transform: capitalize;
`;

const GroundType = props => {
  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0);
  }

  return (
    <div>
      <img src={Ground} alt="ground type icon" />
      <StyledParagraph>
        The Ground type is also a mostly slow and physical type, hitting
        Electric, Fire, Poison, Rock and Steel super effectively while being
        immune to Electric-type attacks. However, similar to Rock-type, the
        power of Ground is hindered by the major weaknesses against Water and
        Grass, as well as having no effect on Flying-type Pokémon and those with
        the Ability Levitate.
      </StyledParagraph>
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                {pokemon.types.map((type, i) => {
                  if (type.type.name.includes("ground")) {
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

export default connect(mapStateToProps, {})(GroundType);

import React from "react";
import PokemonLogo from '../Images/PokemonLogo.png';
import { connect } from "react-redux";
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 5%;
`;

const StyledImg = styled.img`
    align-item: center;
    width: 80%;
    margin: -70px -40px -70px -70px;
    -webkit-filter: drop-shadow(5px 5px 10px #000000); 
    filter: drop-shadow(5px 5px 10px #000000);
`;

const StyledName = styled.h3`
text-transform: capitalize;
`;

const StyledType = styled.span`
text-transform: capitalize;
margin-right: 2px;
`;

const Dashboard = (props) => {

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }

  return (
    <StyledDiv className="headers">
      <h1>Welcome To The Pokemon Database!</h1>
      <StyledImg src={PokemonLogo} alt="pokemons" />
      <div>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <div key={i}>
                <StyledName>{pokemon.name}</StyledName>
                <img src={pokemon.picture} alt="pokemon" />
                <p>Height: {((pokemon.height/ 10).toFixed(1))}m</p>
                <p>Weight: {((pokemon.weight/ 10).toFixed(1))}Kg</p>
                <p>Type:
                      {pokemon.types.map((type, i) => {
                  return (
                    <StyledType key={i}>{" " + type.type.name + " "}</StyledType>
                  )
                })}</p>
              </div>
            )
          })}
      </div>
    </StyledDiv>
  );
};

const mapStateToProps = state => {
  return {
    pokemonData: state.pokemonData
  }
}

export default connect(mapStateToProps, {})(Dashboard);

import React from "react";
import PokemonLogo from "../Images/PokemonLogo.png";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 5%;
`;

const StyledImg = styled.img`
  align-item: center;
  width: 90%;
  margin: -13% 2% -10% -3%;
  -webkit-filter: drop-shadow(5px 5px 10px #000000);
  filter: drop-shadow(5px 5px 10px #000000);
`;

const StyledName = styled.h3`
  text-transform: capitalize;
  color: #FFDE00;
  text-shadow: -1px -1px #3B4CCA, 1px -1px #3B4CCA, -1px 1px #3B4CCA, 1px 1px #3B4CCA;
  -webkit-filter: drop-shadow(1px 1px 3px #000000); filter: drop-shadow(1px 1px 3px #000000);
`;

const StyledType = styled.span`
  text-transform: capitalize;
  margin-right: 2px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1% 0%;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  margin: 2%;
  width: 10em;
  background: linear-gradient(180deg, rgba(53,66,171,1) 0%, rgba(66,84,221,1) 50%, rgba(99,117,255,1) 100%);
  border: 5px solid;
  border-image-source: linear-gradient(#ffffff, #e6e6e6);
  border-image-slice: 1;
  border-image-radius: 10px;
  box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.7), inset 5px 5px 20px 0px rgba(0,0,0,0.7);
`;

const StyledPic = styled.img`
  margin: -15px;
  -webkit-filter: drop-shadow(1px 1px 3px #000000); filter: drop-shadow(1px 1px 3px #000000);
`;

const StyledInfo = styled.p`
  color: white;
  text-shadow: -1px -1px #3B4CCA, 1px -1px #3B4CCA, -1px 1px #3B4CCA, 1px 1px #3B4CCA;
  -webkit-filter: drop-shadow(1px 1px 1px #000000); filter: drop-shadow(1px 1px 1px #000000);
`;

const Dashboard = props => {
  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0);
  }

  return (
    <StyledDiv className="headers">
      <h1>Welcome To The Pokemon Database!</h1>
      <StyledImg src={PokemonLogo} alt="pokemons" />
      <StyledContainer>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            return (
              <StyledCard key={i}>
                <StyledName>{pokemon.name}</StyledName>
                <StyledPic src={pokemon.picture} alt="pokemon" />
                <StyledInfo>Height: {(pokemon.height / 10).toFixed(1)}m</StyledInfo>
                <StyledInfo>Weight: {(pokemon.weight / 10).toFixed(1)}Kg</StyledInfo>
                <StyledInfo>
                  Type:
                  {pokemon.types.map((type, i) => {
                    return (
                      <StyledType key={i}>
                        {" " + type.type.name + " "}
                      </StyledType>
                    );
                  })}
                </StyledInfo>
              </StyledCard>
            );
          })}
      </StyledContainer>
    </StyledDiv>
  );
};

const mapStateToProps = state => {
  return {
    pokemonData: state.pokemonData
  };
};

export default connect(mapStateToProps, {})(Dashboard);

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 4%;
`;

const StyledName = styled.h3`
  text-transform: capitalize;
  font-size: 1.7em;
  color: #ffde00;
  text-shadow: -1px -1px #3b4cca, 1px -1px #3b4cca, -1px 1px #3b4cca,
    1px 1px #3b4cca;
  -webkit-filter: drop-shadow(1px 1px 3px #000000);
  filter: drop-shadow(1px 1px 3px #000000);
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1% 0%;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  margin: 2%;
  width: 16em;
  background: linear-gradient(
    180deg,
    rgba(53, 66, 171, 1) 0%,
    rgba(66, 84, 221, 1) 50%,
    rgba(99, 117, 255, 1) 100%
  );
  border: 5px solid;
  border-image-source: linear-gradient(#ffffff, #e6e6e6);
  border-image-slice: 1;
  border-image-radius: 10px;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.7),
    inset 5px 5px 20px 0px rgba(0, 0, 0, 0.7);
`;

const StyledPic = styled.img`
  margin: -15px;
  width: 150px;
  -webkit-filter: drop-shadow(1px 1px 3px #000000);
  filter: drop-shadow(1px 1px 3px #000000);
`;

const StyledInfo = styled.p`
  color: white;
  font-size: 1.4em;
  text-shadow: -1px -1px #3b4cca, 1px -1px #3b4cca, -1px 1px #3b4cca,
    1px 1px #3b4cca;
  -webkit-filter: drop-shadow(1px 1px 1px #000000);
  filter: drop-shadow(1px 1px 1px #000000);
`;

const StyledTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  text-shadow: -1px -1px 1px #000, 1px -1px 1px #000, -1px 1px 1px #000,
    1px 1px 1px #000;
  box-sizing: border-box;
`;

const StyledType = styled.p`
  text-transform: capitalize;
  margin: -3px 1px 15px;
  padding: 8px 16px 10px;
  border: 0.3px solid #000;
  border-radius: 15px;
  font-size: 1.2em;
  width: 30%;
  background: ${props =>
    props.bug
      ? "#99ce58"
      : props.dragon
      ? "#8e9fd3"
      : props.electric
      ? "#fbf384"
      : props.fairy
      ? "#f9bef5"
      : props.fighting
      ? "#f17942"
      : props.fire
      ? "#e63333"
      : props.flying
      ? "#b0f7ef"
      : props.ghost
      ? "#827a9f"
      : props.grass
      ? "#00cc00"
      : props.ground
      ? "#f5c7a3"
      : props.ice
      ? "#a1f0f0"
      : props.normal
      ? "#bec2c2"
      : props.poison
      ? "#b041d8"
      : props.psychic
      ? "#eb53e3"
      : props.rock
      ? "#d09c6d"
      : props.steel
      ? "#a29d99"
      : props.water
      ? "#4478e5"
      : "black"};
`;

const Dashboard = props => {
  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0);
  }

  return (
    <StyledDiv className="headers">
      <div>
        
        <StyledContainer>
          {props.pokemonData &&
            props.pokemonData.map((pokemon, i) => {
              if (pokemon.types[1]) {
                return (
                  <StyledCard key={i}>
                    <StyledName>{pokemon.name}</StyledName>
                    <StyledPic src={pokemon.picture} alt="pokemon" />
                    <StyledInfo>
                      Height: {(pokemon.height / 10).toFixed(1)}m
                    </StyledInfo>
                    <StyledInfo>
                      Weight: {(pokemon.weight / 10).toFixed(1)}Kg
                    </StyledInfo>
                    <StyledTypes>
                      <StyledType
                        bug={pokemon.types[0].includes("bug")}
                        dragon={pokemon.types[0].includes("dragon")}
                        electric={pokemon.types[0].includes("electric")}
                        fairy={pokemon.types[0].includes("fairy")}
                        fighting={pokemon.types[0].includes("fighting")}
                        fire={pokemon.types[0].includes("fire")}
                        flying={pokemon.types[0].includes("flying")}
                        ghost={pokemon.types[0].includes("ghost")}
                        grass={pokemon.types[0].includes("grass")}
                        ground={pokemon.types[0].includes("ground")}
                        ice={pokemon.types[0].includes("ice")}
                        normal={pokemon.types[0].includes("normal")}
                        poison={pokemon.types[0].includes("poison")}
                        psychic={pokemon.types[0].includes("psychic")}
                        rock={pokemon.types[0].includes("rock")}
                        steel={pokemon.types[0].includes("steel")}
                        water={pokemon.types[0].includes("water")}
                      >
                        {pokemon.types[0]}
                      </StyledType>
                      <StyledType
                        bug={pokemon.types[1].includes("bug")}
                        dragon={pokemon.types[1].includes("dragon")}
                        electric={pokemon.types[1].includes("electric")}
                        fairy={pokemon.types[1].includes("fairy")}
                        fighting={pokemon.types[1].includes("fighting")}
                        fire={pokemon.types[1].includes("fire")}
                        flying={pokemon.types[1].includes("flying")}
                        ghost={pokemon.types[1].includes("ghost")}
                        grass={pokemon.types[1].includes("grass")}
                        ground={pokemon.types[1].includes("ground")}
                        ice={pokemon.types[1].includes("ice")}
                        normal={pokemon.types[1].includes("normal")}
                        poison={pokemon.types[1].includes("poison")}
                        psychic={pokemon.types[1].includes("psychic")}
                        rock={pokemon.types[1].includes("rock")}
                        steel={pokemon.types[1].includes("steel")}
                        water={pokemon.types[1].includes("water")}
                      >
                        {pokemon.types[1]}
                      </StyledType>
                    </StyledTypes>
                  </StyledCard>
                );
              } else {
                return (
                  <StyledCard key={i}>
                    <StyledName>{pokemon.name}</StyledName>
                    <StyledPic src={pokemon.picture} alt="pokemon" />
                    <StyledInfo>
                      Height: {(pokemon.height / 10).toFixed(1)}m
                    </StyledInfo>
                    <StyledInfo>
                      Weight: {(pokemon.weight / 10).toFixed(1)}Kg
                    </StyledInfo>
                    <StyledTypes>
                      <StyledType
                        bug={pokemon.types[0].includes("bug")}
                        dragon={pokemon.types[0].includes("dragon")}
                        electric={pokemon.types[0].includes("electric")}
                        fairy={pokemon.types[0].includes("fairy")}
                        fighting={pokemon.types[0].includes("fighting")}
                        fire={pokemon.types[0].includes("fire")}
                        flying={pokemon.types[0].includes("flying")}
                        ghost={pokemon.types[0].includes("ghost")}
                        grass={pokemon.types[0].includes("grass")}
                        ground={pokemon.types[0].includes("ground")}
                        ice={pokemon.types[0].includes("ice")}
                        normal={pokemon.types[0].includes("normal")}
                        poison={pokemon.types[0].includes("poison")}
                        psychic={pokemon.types[0].includes("psychic")}
                        rock={pokemon.types[0].includes("rock")}
                        steel={pokemon.types[0].includes("steel")}
                        water={pokemon.types[0].includes("water")}
                      >
                        {pokemon.types[0]}
                      </StyledType>
                    </StyledTypes>
                  </StyledCard>
                );
              }
            })}
        </StyledContainer>
      </div>
    </StyledDiv>
  );
};

const mapStateToProps = state => {
  return {
    pokemonData: state.pokemonData
  };
};

export default connect(mapStateToProps, {})(Dashboard);

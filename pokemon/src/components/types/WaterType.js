import React from "react";
import Water from "../../Images/Water.png";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const StyledName = styled.h3`
  text-transform: capitalize;
  color: #FFDE00;
  text-shadow: -1px -1px #3B4CCA, 1px -1px #3B4CCA, -1px 1px #3B4CCA, 1px 1px #3B4CCA;
  -webkit-filter: drop-shadow(1px 1px 3px #000000); filter: drop-shadow(1px 1px 3px #000000);
`;

const StyledIcon = styled.img`
  width: 8em;
  margin: 3%;
  border-radius: 50%;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
`;

const StyledWaterName = styled.h2`
  color: #4478e5;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledNamesDiv = styled.div`
  text-shadow: -1px -1px #000, 1px -1px #000, -1px 1px #000, 1px 1px #000;
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(1px 1px 2px #000);
  position: relative;
  text-align: center;
  color: white;
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

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1% 0%;
  flex-wrap: wrap;
`;

const WaterType = props => {
  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0);
  }

  return (
    <div>
      <StyledNamesDiv>  
        <StyledIcon src={Water} alt="water type icon" />
        <StyledWaterName>Water</StyledWaterName>
      </StyledNamesDiv>
      <StyledParagraph>
        The Water type is a very balanced type, as well as being the most common
        out of the 18 types. Water-type Pokémon are super effective against
        Fire-type, Rock-type and Ground-type Pokémon, but are weak to
        Electric-type and Grass-type attacks. Water types also resist Fire-type,
        Steel-type, Ice-type, and Water-type moves, making it a semi-defensive
        typing.
      </StyledParagraph>
      <StyledContainer>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            if (pokemon.types.includes("water")) {
              return (
                <StyledCard key={i}>
                  <StyledName>{pokemon.name}</StyledName>
                  <StyledPic src={pokemon.picture} alt="pokemon" />
                  <StyledInfo>Height: {((pokemon.height/ 10).toFixed(1))}m</StyledInfo>
                  <StyledInfo>Weight: {((pokemon.weight/ 10).toFixed(1))}Kg</StyledInfo>
                </StyledCard>
              )
            }}) 
        }    
      </StyledContainer>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    pokemonData: state.pokemonData
  };
};

export default connect(mapStateToProps, {})(WaterType);

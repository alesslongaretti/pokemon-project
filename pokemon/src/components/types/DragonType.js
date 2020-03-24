import React from "react";
import Dragon from "../../Images/Dragon.png";
import styled from 'styled-components';
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 450;
  text-align: justify;
  width: 85%;
  padding: 15px 20px 15px;
  margin: 10px auto;
  background: linear-gradient(90deg, rgba(161,173,212,1) 0%, rgba(146,161,206,1) 50%, rgba(135,151,199,1) 100%);
  border: 3px solid #3a4a78; 
  box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.7);
`;

const StyledName = styled.h3`
  text-transform: capitalize;
  color: #FFDE00;
  text-shadow: -1px -1px #3B4CCA, 1px -1px #3B4CCA, -1px 1px #3B4CCA, 1px 1px #3B4CCA;
  -webkit-filter: drop-shadow(1px 1px 3px #000000); filter: drop-shadow(1px 1px 3px #000000);
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
  margin: 2% 2% 5%;
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
  margin: 40px 0% 20px;
  flex-wrap: wrap;
`;

const StyledIcon = styled.img`
  width: 8em;
  margin: 40px;
  border-radius: 50%;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
`;

const StyledDragonName = styled.h2`
  color: #8e9fd3;
  width: 10em;
  position: absolute;
  top: 40%;
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

const DragonType = props => {

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }

  return (
    <div>
      <StyledNamesDiv>  
        <StyledIcon src={Dragon} alt="dragon type icon" />
        <StyledDragonName>Dragon</StyledDragonName>
      </StyledNamesDiv>
      <StyledParagraph>
        Dragon-type moves are only super effective against its own type, yet
        Dragon-type Pokémon have powerful stats to compensate. However, most
        final form Dragon-type Pokémon have double weaknesses to Ice-type moves
        due to their secondary types, and Dragon-type moves have no effect on
        Fairy-type Pokémon.
      </StyledParagraph>
      <StyledContainer>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            if (pokemon.types.includes("dragon")) {
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
  console.log(state)
  return {
    pokemonData: state.pokemonData
  }
}

export default connect(mapStateToProps, {})(DragonType);


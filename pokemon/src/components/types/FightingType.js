import React from "react";
import Fighting from "../../Images/Fighting.png";
import styled from 'styled-components';
import { connect } from "react-redux";

const StyledParagraph = styled.p`
  font-size: 22px;
  line-height: 1.2;
  font-weight: 450;
  text-align: justify;
  width: 84%;
  box-sizing: border-box;
  padding: 30px 40px 30px;
  margin: 10px auto;
  background: linear-gradient(90deg, rgba(246,195,144,1) 0%, rgba(248,191,133,1) 50%, rgba(244,179,113,1) 100%);
  border: 3px solid #f17942; 
  box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.7);
`;

const StyledName = styled.h3`
  font-size: 1.7em;
  text-transform: capitalize;
  color: #FFDE00;
  text-shadow: -1px -1px #3B4CCA, 1px -1px #3B4CCA, -1px 1px #3B4CCA, 1px 1px #3B4CCA;
  -webkit-filter: drop-shadow(1px 1px 3px #000000); filter: drop-shadow(1px 1px 3px #000000);
`;

const StyledPic = styled.img`
  margin: -15px;
  width: 150px;
  -webkit-filter: drop-shadow(1px 1px 3px #000000); filter: drop-shadow(1px 1px 3px #000000);
`;

const StyledInfo = styled.p`
  font-size: 1.5em;
  color: white;
  text-shadow: -1px -1px #3B4CCA, 1px -1px #3B4CCA, -1px 1px #3B4CCA, 1px 1px #3B4CCA;
  -webkit-filter: drop-shadow(1px 1px 1px #000000); filter: drop-shadow(1px 1px 1px #000000);
`;

const StyledCard = styled.div`
  margin: 2% 2% 5%;
  padding-bottom: 2px;
  width: 16em;
  background: linear-gradient(180deg, rgba(53,66,171,1) 0%, rgba(66,84,221,1) 50%, rgba(99,117,255,1) 100%);
  border: 5px solid;
  border-image-source: linear-gradient(#ffffff, #e6e6e6);
  border-image-slice: 1;
  border-image-radius: 10px;
  box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.7), inset 5px 5px 20px 0px rgba(0,0,0,0.7);
`;

const StyledContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  margin: 40px auto 20px;
  flex-wrap: wrap;
`;

const StyledIcon = styled.img`
  width: 12em;
  margin: 40px;
  border-radius: 50%;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
`;

const StyledFightingName = styled.h1`
  color: #f17942;
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

const FightingType = props => {

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }

  return (
    <div>
      <StyledNamesDiv>  
        <StyledIcon src={Fighting} alt="fighting type icon" />
        <StyledFightingName>Fighting</StyledFightingName>
      </StyledNamesDiv>
      <StyledParagraph>
        The Fighting type is one of the strongest types, as the attacks are
        super effective against Normal, Ice, Rock, Dark and Steel-type Pokémon,
        tying with Ground for causing super effective damage against most types.
        Its unique power against Normal-type is what makes Fighting-type Pokémon
        shine. Unfortunately, their power is kept in check by attacks of
        Flying-type, Psychic-type and the new Fairy-type. It also has no effect
        on Ghost-type Pokémon.
      </StyledParagraph>
      <StyledContainer>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            if (pokemon.types.includes("fighting")) {
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

export default connect(mapStateToProps, {})(FightingType);

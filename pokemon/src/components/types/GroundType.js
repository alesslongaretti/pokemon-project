import React from "react";
import Ground from "../../Images/Ground.png";
import styled from "styled-components";
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
  background: linear-gradient(90deg, rgba(255,237,229,1) 0%, rgba(255,229,217,1) 50%, rgba(255,215,196,1) 100%);
  border: 3px solid #e5b380; 
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

const StyledGroundName = styled.h1`
  color: #f5c7a3;
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

const GroundType = props => {
  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0);
  }

  return (
    <div>
      <StyledNamesDiv>  
        <StyledIcon src={Ground} alt="ground type icon" />
        <StyledGroundName>Ground</StyledGroundName>
      </StyledNamesDiv>
      <StyledParagraph>
        The Ground type is also a mostly slow and physical type, hitting
        Electric, Fire, Poison, Rock and Steel super effectively while being
        immune to Electric-type attacks. However, similar to Rock-type, the
        power of Ground is hindered by the major weaknesses against Water and
        Grass, as well as having no effect on Flying-type Pokémon and those with
        the Ability Levitate.
      </StyledParagraph>
      <StyledContainer>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            if (pokemon.types.includes("ground")) {
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

export default connect(mapStateToProps, {})(GroundType);

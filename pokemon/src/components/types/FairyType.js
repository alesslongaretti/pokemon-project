import React from "react";
import Fairy from "../../Images/Fairy.webp";
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
  background: linear-gradient(90deg, rgba(251,218,249,1) 0%, rgba(253,203,250,1) 50%, rgba(249,190,245,1) 100%);
  border: 3px solid #f273ea; 
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

const StyledFairyName = styled.h1`
  color: #f9bef5;
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

const FairyType = props => {

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }

  return (
    <div>
      <StyledNamesDiv>  
        <StyledIcon src={Fairy} alt="fairy type icon" />
        <StyledFairyName>Fairy</StyledFairyName>
      </StyledNamesDiv>
      <StyledParagraph>
      To turn the tides for the everlasting domination of the Dragon-type
        Pokémon, the Fairy type was added to balance the meta. Fairy-type
        attacks are super effective against Fighting, Dragon and Dark-type
        Pokémon. Fairy-type Pokémon are also immune to Dragon-type moves.
      </StyledParagraph>
      <StyledContainer>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            if (pokemon.types.includes("fairy")) {
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

export default connect(mapStateToProps, {})(FairyType);
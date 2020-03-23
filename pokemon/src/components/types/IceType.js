import React from "react";
import Ice from "../../Images/Ice.png";
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
  width: 20%;
  margin-top: 20px;
  border-radius: 50%;
  box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.9);
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

const IceType = props => {
  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0);
  }

  return (
    <div>
      <StyledIcon src={Ice} alt="ice type icon" />
      <StyledParagraph>
        The Ice type is another fragile type, being weak to the all-out
        offensive Fire-type and Fighting-type attacks, as well as Rock-type and
        Steel-type moves. Luckily, its unique strength on being the nightmare of
        Dragon-type Pokémon comes in handy. In addition, Ice-type attacks also
        hit Grass-type, Flying-type and Ground-type Pokémon super effectively.
        The Ice type is a usually bad type for defensive Pokémon as it only
        resists itself.
      </StyledParagraph>
      <StyledContainer>
        {props.pokemonData &&
          props.pokemonData.map((pokemon, i) => {
            if (pokemon.types.includes("ice")) {
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

export default connect(mapStateToProps, {})(IceType);

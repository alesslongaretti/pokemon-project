import React, { useEffect } from "react";
import Bug from "../Images/Bug.png";
import Dragon from '../Images/Dragon.png';
import Electric from '../Images/Electric.png';
import Fairy from '../Images/Fairy.png';
import Fighting from '../Images/Fighting.png';
import Fire from '../Images/Fire.png';
import Flying from '../Images/Flying.png';
import Ghost from '../Images/Ghost.png';
import Grass from '../Images/Grass.png';
import Ground from '../Images/Ground.png';
import Ice from '../Images/Ice.png';
import Normal from '../Images/Normal.png';
import Poison from '../Images/Poison.png';
import Psychic from '../Images/Psychic.png';
import Rock from '../Images/Rock.png';
import Steel from '../Images/Steel.png';
import Water from '../Images/Water.png';
import PokemonHeader from '../Images/PokemonHeader.jpg';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 5%;
`;

const StyledImg = styled.img`
    max-width: 80vw;
`;

const StyledLinksDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 5% 0%;
`;

const StyledLink = styled(Link)`
    align-items: ;
    margin: 1% 1%;
    min-width: 11vw;
`;

const StyledName = styled.h3`
text-transform: capitalize;
`;

const StyledType = styled.span`
text-transform: capitalize;
margin-right: 2px;
`;

const Dashboard = (props) => {
  useEffect(() => {

  }, [])

  if (props.pokemonData[0] === undefined) {
    props.pokemonData.splice(0)
  }

  return (
    <StyledDiv className="headers">
      <h1>Welcome To The Pokemon Database!</h1>
      <StyledImg src={PokemonHeader} alt="pokemons" />
      <h2>Search Pokemons By Type:</h2>
      <StyledLinksDiv>
        <StyledLink className="link" to="/bug-type">
          <img src={Bug} alt="bug type icon" />
        </StyledLink>
        <StyledLink className="link" to="/dragon-type">
          <img src={Dragon} alt="dragon type icon" />
        </StyledLink>
        <StyledLink className="link" to="/electric-type">
          <img src={Electric} alt="electric type icon" />
        </StyledLink>
        <StyledLink className="link" to="/fairy-type">
          <img src={Fairy} alt="fairy type icon" />
        </StyledLink>
        <StyledLink className="link" to="/fighting-type">
          <img src={Fighting} alt="fighting type icon" />
        </StyledLink>
        <StyledLink className="link" to="/fire-type">
          <img src={Fire} alt="fire type icon" />
        </StyledLink>
        <StyledLink className="link" to="/flying-type">
          <img src={Flying} alt="flying type icon" />
        </StyledLink>
        <StyledLink className="link" to="/ghost-type">
          <img src={Ghost} alt="ghost type icon" />
        </StyledLink>
        <StyledLink className="link" to="/grass-type">
          <img src={Grass} alt="grass type icon" />
        </StyledLink>
        <StyledLink className="link" to="/ground-type">
          <img src={Ground} alt="ground type icon" />
        </StyledLink>
        <StyledLink className="link" to="/ice-type">
          <img src={Ice} alt="Ice type icon" />
        </StyledLink>
        <StyledLink className="link" to="/normal-type">
          <img src={Normal} alt="normal type icon" />
        </StyledLink>
        <StyledLink className="link" to="/poison-type">
          <img src={Poison} alt="poison type icon" />
        </StyledLink>
        <StyledLink className="link" to="/psychic-type">
          <img src={Psychic} alt="psychic type icon" />
        </StyledLink>
        <StyledLink className="link" to="/rock-type">
          <img src={Rock} alt="rock type icon" />
        </StyledLink>
        <StyledLink className="link" to="/steel-type">
          <img src={Steel} alt="steel type icon" />
        </StyledLink>
        <StyledLink className="link" to="/water-type">
          <img src={Water} alt="water type icon" />
        </StyledLink>
      </StyledLinksDiv>
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
  console.log(state)
  return {
    pokemonData: state.pokemonData
  }
}

export default connect(mapStateToProps, {})(Dashboard);

import React from "react";
import Bug from "../Images/Bug.png";
import Dragon from "../Images/Dragon.png";
import Electric from "../Images/Electric.png";
import Fairy from "../Images/Fairy.webp";
import Fighting from "../Images/Fighting.png";
import Fire from "../Images/Fire.png";
import Flying from "../Images/Flying.png";
import Ghost from "../Images/Ghost.png";
import Grass from "../Images/Grass.png";
import Ground from "../Images/Ground.png";
import Ice from "../Images/Ice.png";
import Normal from "../Images/Normal.png";
import Poison from "../Images/Poison.png";
import Psychic from "../Images/Psychic.png";
import Rock from "../Images/Rock.png";
import Steel from "../Images/Steel.png";
import Water from "../Images/Water.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 5%;
`;

const StyledLinksDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5% 0%;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  margin: 3%;
`;

const StyledIcon = styled.img`
  width: 12vw;
  margin-top: 20px;
  border-radius: 50%;
  box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.9);
`;

const SearchByType = () => {
  return (
    <StyledDiv className="headers">
      <h2>Search Pokemons By Type:</h2>
      <StyledLinksDiv>
        <StyledLink className="link" to="/bug-type">
          <StyledIcon src={Bug} alt="bug type icon" />
        </StyledLink>
        <StyledLink className="link" to="/dragon-type">
          <StyledIcon src={Dragon} alt="dragon type icon" />
        </StyledLink>
        <StyledLink className="link" to="/electric-type">
          <StyledIcon src={Electric} alt="electric type icon" />
        </StyledLink>
        <StyledLink className="link" to="/fairy-type">
          <StyledIcon src={Fairy} alt="fairy type icon" />
        </StyledLink>
        <StyledLink className="link" to="/fighting-type">
          <StyledIcon src={Fighting} alt="fighting type icon" />
        </StyledLink>
        <StyledLink className="link" to="/fire-type">
          <StyledIcon src={Fire} alt="fire type icon" />
        </StyledLink>
        <StyledLink className="link" to="/flying-type">
          <StyledIcon src={Flying} alt="flying type icon" />
        </StyledLink>
        <StyledLink className="link" to="/ghost-type">
          <StyledIcon src={Ghost} alt="ghost type icon" />
        </StyledLink>
        <StyledLink className="link" to="/grass-type">
          <StyledIcon src={Grass} alt="grass type icon" />
        </StyledLink>
        <StyledLink className="link" to="/ground-type">
          <StyledIcon src={Ground} alt="ground type icon" />
        </StyledLink>
        <StyledLink className="link" to="/ice-type">
          <StyledIcon src={Ice} alt="Ice type icon" />
        </StyledLink>
        <StyledLink className="link" to="/normal-type">
          <StyledIcon src={Normal} alt="normal type icon" />
        </StyledLink>
        <StyledLink className="link" to="/poison-type">
          <StyledIcon src={Poison} alt="poison type icon" />
        </StyledLink>
        <StyledLink className="link" to="/psychic-type">
          <StyledIcon src={Psychic} alt="psychic type icon" />
        </StyledLink>
        <StyledLink className="link" to="/rock-type">
          <StyledIcon src={Rock} alt="rock type icon" />
        </StyledLink>
        <StyledLink className="link" to="/steel-type">
          <StyledIcon src={Steel} alt="steel type icon" />
        </StyledLink>
        <StyledLink className="link" to="/water-type">
          <StyledIcon src={Water} alt="water type icon" />
        </StyledLink>
      </StyledLinksDiv>
    </StyledDiv>
  );
};

export default SearchByType;

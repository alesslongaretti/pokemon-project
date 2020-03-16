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
  display: block;
  text-decoration: none;
  color: black;
`;

const StyledIcon = styled.img`
  width: 12vw;
  margin-top: 20px;
  border-radius: 50%;
  box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.9);
`;

const StyledDivName = styled.div`

`;

const SearchByType = () => {
  return (
    <StyledDiv className="headers">
      <a href="https://fontmeme.com/pokemon-font/">
        <img src="https://fontmeme.com/permalink/200316/752d21e33c2682ba029d3ef3f87fd818.png" alt="pokemon-font" border="0"/>
        </a>
      <StyledLinksDiv>

        <StyledLink className="link" to="/bug-type">
          <StyledDivName>
            <h2>Bug</h2>
        </StyledDivName>
          <div>
            <StyledIcon src={Bug} alt="bug type icon" />
          </div>
        </StyledLink>

        <StyledLink className="link" to="/dragon-type">
          <div>
          <h2> Dragon </h2>
          </div>
          <StyledIcon src={Dragon} alt="dragon type icon" />
        </StyledLink>

        <StyledLink className="link" to="/electric-type">
          <div>
            <h2> Electric </h2>
          </div>
          <StyledIcon src={Electric} alt="electric type icon" />
        </StyledLink>

        <StyledLink className="link" to="/fairy-type">
          <div>
            <h2> Fairy </h2>
          </div>
          <StyledIcon src={Fairy} alt="fairy type icon" />
        </StyledLink>

        <StyledLink className="link" to="/fighting-type">
          <div>
            <h2> fighting</h2>
          </div>
          <StyledIcon src={Fighting} alt="fighting type icon" />
        </StyledLink>

        <StyledLink className="link" to="/fire-type">
          <div>
            <h2> Fire </h2>
          </div>
          <StyledIcon src={Fire} alt="fire type icon" />
        </StyledLink>

        <StyledLink className="link" to="/flying-type">
          <div>
            <h2> Flying </h2>
          </div>
          <StyledIcon src={Flying} alt="flying type icon" />
        </StyledLink>

        <StyledLink className="link" to="/ghost-type">
          <div>
            <h2> Ghost </h2>
          </div>
          <StyledIcon src={Ghost} alt="ghost type icon" />
        </StyledLink>

        <StyledLink className="link" to="/grass-type">
          <div>
            <h2> Grass </h2>
          </div>
          <StyledIcon src={Grass} alt="grass type icon" />
        </StyledLink>

        <StyledLink className="link" to="/ground-type">
          <div>
            <h2> Ground </h2>
          </div>
          <StyledIcon src={Ground} alt="ground type icon" />
        </StyledLink>

        <StyledLink className="link" to="/ice-type">
          <div>
            <h2> Ice </h2>
          </div>
          <StyledIcon src={Ice} alt="Ice type icon" />
        </StyledLink>

        <StyledLink className="link" to="/normal-type">
          <div>
            <h2> Normal </h2>
          </div>
          <StyledIcon src={Normal} alt="normal type icon" />
        </StyledLink>

        <StyledLink className="link" to="/poison-type">
          <div>
            <h2> Poison </h2>
          </div>
          <StyledIcon src={Poison} alt="poison type icon" />
        </StyledLink>

        <StyledLink className="link" to="/psychic-type">
          <div>
            <h2> Psychic </h2>
          </div>
          <StyledIcon src={Psychic} alt="psychic type icon" />
        </StyledLink>

        <StyledLink className="link" to="/rock-type">
          <div>
            <h2> Rock </h2>
          </div>
          <StyledIcon src={Rock} alt="rock type icon" />
        </StyledLink>

        <StyledLink className="link" to="/steel-type">
          <div>
            <h2> Steel </h2>
          </div>
          <StyledIcon src={Steel} alt="steel type icon" />
        </StyledLink>

        <StyledLink className="link" to="/water-type">
          <div>
            <h2> Water </h2>
          </div>
          <StyledIcon src={Water} alt="water type icon" />
        </StyledLink>

      </StyledLinksDiv>
    </StyledDiv>
  );
};

export default SearchByType;

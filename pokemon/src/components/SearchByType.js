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
`;

const StyledIcon = styled.img`
  width: 12vw;
  margin-top: 20px;
  border-radius: 50%;
  box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.9);
`;

const StyledBugName = styled.h2`
  color: #99CE58;
`;

const StyledDragonName = styled.h2`
  color: #8E9FD3;
`;

const StyledElectricName = styled.h2`
  color: #fbf384;
`;

const StyledFairyName = styled.h2`
  color: #F9BEF5;
`;

const StyledFightingName = styled.h2`
  color: #F17942;
`;

const StyledFireName = styled.h2`
  color: #e63333;
`;

const StyledFlyingName = styled.h2`
  color: #B0F7EF;
`;

const StyledGhostName = styled.h2`
  color: #827a9f;
`;

const StyledGrassName = styled.h2`
  color: #00cc00;
`;

const StyledGroundName = styled.h2`
  color: #F5C7A3;
`;

const StyledIceName = styled.h2`
  color: #A1F0F0;
`;

const StyledNormalName = styled.h2`
  color: #BEC2C2;
`;

const StyledPoisonName = styled.h2`
  color: #b041d8;
`;

const StyledPsychicName = styled.h2`
  color: #EB53E3;
`;

const StyledRockName = styled.h2`
  color: #D09C6D;
`;

const StyledSteelName = styled.h2`
  color: #A29D99;
`;

const StyledWaterName = styled.h2`
  color: #4478E5;
`;

const StyledHeader = styled.h2`
  -webkit-filter: drop-shadow(5px 5px 5px #000); filter: drop-shadow(3px 3px 3px #000);
`;

const StyledNamesDiv = styled.div`
text-shadow: -1px -1px #000, 1px -1px #000, -1px 1px #000, 1px 1px #000;
-webkit-filter: drop-shadow(1px 1px 2px #000); filter: drop-shadow(1px 1px 2px #000);
`;


const SearchByType = () => {
  return (
    <StyledDiv className="headers">
      <StyledHeader>
        <img src="https://fontmeme.com/permalink/200316/752d21e33c2682ba029d3ef3f87fd818.png" alt="pokemon-font" border="0"/>
    </StyledHeader>
      <StyledLinksDiv>

        <StyledLink className="link" to="/bug-type">
          <StyledNamesDiv>
            <StyledBugName> Bug </StyledBugName>
        </StyledNamesDiv>
          <div>
            <StyledIcon src={Bug} alt="bug type icon" />
          </div>
        </StyledLink>

        <StyledLink className="link" to="/dragon-type">
          <StyledNamesDiv>
            <StyledDragonName> Dragon </StyledDragonName>
          </StyledNamesDiv>
          <StyledIcon src={Dragon} alt="dragon type icon" />
        </StyledLink>

        <StyledLink className="link" to="/electric-type">
          <StyledNamesDiv>
            <StyledElectricName> Electric </StyledElectricName>
          </StyledNamesDiv>
          <StyledIcon src={Electric} alt="electric type icon" />
        </StyledLink>

        <StyledLink className="link" to="/fairy-type">
          <StyledNamesDiv>
            <StyledFairyName> Fairy </StyledFairyName>
          </StyledNamesDiv>
          <StyledIcon src={Fairy} alt="fairy type icon" />
        </StyledLink>

        <StyledLink className="link" to="/fighting-type">
          <StyledNamesDiv>
            <StyledFightingName> Fighting</StyledFightingName>
          </StyledNamesDiv>
          <StyledIcon src={Fighting} alt="fighting type icon" />
        </StyledLink>

        <StyledLink className="link" to="/fire-type">
          <StyledNamesDiv>
            <StyledFireName> Fire </StyledFireName>
          </StyledNamesDiv>
          <StyledIcon src={Fire} alt="fire type icon" />
        </StyledLink>

        <StyledLink className="link" to="/flying-type">
          <StyledNamesDiv>
            <StyledFlyingName> Flying </StyledFlyingName>
          </StyledNamesDiv>
          <StyledIcon src={Flying} alt="flying type icon" />
        </StyledLink>

        <StyledLink className="link" to="/ghost-type">
          <StyledNamesDiv>
            <StyledGhostName> Ghost </StyledGhostName>
          </StyledNamesDiv>
          <StyledIcon src={Ghost} alt="ghost type icon" />
        </StyledLink>

        <StyledLink className="link" to="/grass-type">
          <StyledNamesDiv>
            <StyledGrassName> Grass </StyledGrassName>
          </StyledNamesDiv>
          <StyledIcon src={Grass} alt="grass type icon" />
        </StyledLink>

        <StyledLink className="link" to="/ground-type">
          <StyledNamesDiv>
            <StyledGroundName> Ground </StyledGroundName>
          </StyledNamesDiv>
          <StyledIcon src={Ground} alt="ground type icon" />
        </StyledLink>

        <StyledLink className="link" to="/ice-type">
          <StyledNamesDiv>
            <StyledIceName> Ice </StyledIceName>
          </StyledNamesDiv>
          <StyledIcon src={Ice} alt="Ice type icon" />
        </StyledLink>

        <StyledLink className="link" to="/normal-type">
          <StyledNamesDiv>
            <StyledNormalName> Normal </StyledNormalName>
          </StyledNamesDiv>
          <StyledIcon src={Normal} alt="normal type icon" />
        </StyledLink>

        <StyledLink className="link" to="/poison-type">
          <StyledNamesDiv>
            <StyledPoisonName> Poison </StyledPoisonName>
          </StyledNamesDiv>
          <StyledIcon src={Poison} alt="poison type icon" />
        </StyledLink>

        <StyledLink className="link" to="/psychic-type">
          <StyledNamesDiv>
            <StyledPsychicName> Psychic </StyledPsychicName>
          </StyledNamesDiv>
          <StyledIcon src={Psychic} alt="psychic type icon" />
        </StyledLink>

        <StyledLink className="link" to="/rock-type">
          <StyledNamesDiv>
            <StyledRockName> Rock </StyledRockName>
          </StyledNamesDiv>
          <StyledIcon src={Rock} alt="rock type icon" />
        </StyledLink>

        <StyledLink className="link" to="/steel-type">
          <StyledNamesDiv>
            <StyledSteelName> Steel </StyledSteelName>
          </StyledNamesDiv>
          <StyledIcon src={Steel} alt="steel type icon" />
        </StyledLink>

        <StyledLink className="link" to="/water-type">
          <StyledNamesDiv>
            <StyledWaterName> Water </StyledWaterName>
          </StyledNamesDiv>
          <StyledIcon src={Water} alt="water type icon" />
        </StyledLink>

      </StyledLinksDiv>
    </StyledDiv>
  );
};

export default SearchByType;

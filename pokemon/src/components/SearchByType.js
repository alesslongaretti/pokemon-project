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
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 4%;
`;

const StyledLinksDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 30px;
  flex-wrap: wrap;
`;

const StyledLink = styled.a`
  margin: 3%;
  display: block;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledIcon = styled.img`
  width: 12em;
  border-radius: 50%;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
`;

const StyledBugName = styled.h1`
  color: #99ce58;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledDragonName = styled.h1`
  color: #8e9fd3;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledElectricName = styled.h1`
  color: #fbf384;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledFairyName = styled.h1`
  color: #f9bef5;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledFightingName = styled.h1`
  color: #f17942;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledFireName = styled.h1`
  color: #ff6666;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledFlyingName = styled.h1`
  color: #b0f7ef;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledGhostName = styled.h1`
  color: #aca6bf;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledGrassName = styled.h1`
  color: #00cc00;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledGroundName = styled.h1`
  color: #f5c7a3;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledIceName = styled.h1`
  color: #a1f0f0;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledNormalName = styled.h1`
  color: #bec2c2;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledPoisonName = styled.h1`
  color: #c75eed;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledPsychicName = styled.h1`
  color: #ef76e9;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledRockName = styled.h1`
  color: #dab08b;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledSteelName = styled.h1`
  color: #dbd9d7;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledWaterName = styled.h1`
  color: #4d85ff;
  width: 10em;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(3px 3px 4px #000);
`;

const StyledHeader = styled.h1`
  color: white;
  font-size: 35px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #3b4cca;
  filter: drop-shadow(5px 5px 5px black);
`;

const StyledNamesDiv = styled.div`
  text-shadow: -1px -1px #000, 1px -1px #000, -1px 1px #000, 1px 1px #000;
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(1px 1px 2px #000);
  position: relative;
  text-align: center;
  color: white;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 6% 5%;
  background: linear-gradient(
    270deg,
    rgba(53, 66, 171, 1) 0%,
    rgba(66, 84, 221, 1) 50%,
    rgba(99, 117, 255, 1) 100%
  );
  border: 5px solid;
  border-image-source: linear-gradient(#ffffff, #e6e6e6);
  border-image-slice: 1;
  border-image-radius: 10px;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.7),
    inset 5px 5px 20px 0px rgba(0, 0, 0, 0.7);
`;

const SearchByType = props => {
  return (
    <StyledDiv className="headers">
      <div>
        <StyledHeader>Search Pokemon By Type</StyledHeader>
      </div>
    <StyledContainer>
      <StyledLinksDiv>
        <StyledLink className="link" href="/bug-type">
          <StyledNamesDiv>
            <StyledIcon src={Bug} alt="bug type icon" />
            <StyledBugName> Bug </StyledBugName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/dragon-type">
          <StyledNamesDiv>
            <StyledIcon src={Dragon} alt="dragon type icon" />
            <StyledDragonName> Dragon </StyledDragonName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/electric-type">
          <StyledNamesDiv>
            <StyledIcon src={Electric} alt="electric type icon" />
            <StyledElectricName> Electric </StyledElectricName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/fairy-type">
          <StyledNamesDiv>
            <StyledIcon src={Fairy} alt="fairy type icon" />
            <StyledFairyName> Fairy </StyledFairyName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/fighting-type">
          <StyledNamesDiv>
            <StyledIcon src={Fighting} alt="fighting type icon" />
            <StyledFightingName> Fighting</StyledFightingName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/fire-type">
          <StyledNamesDiv>
            <StyledIcon src={Fire} alt="fire type icon" />
            <StyledFireName> Fire </StyledFireName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/flying-type">
          <StyledNamesDiv>
            <StyledIcon src={Flying} alt="flying type icon" />
            <StyledFlyingName> Flying </StyledFlyingName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/ghost-type">
          <StyledNamesDiv>
            <StyledIcon src={Ghost} alt="ghost type icon" />
            <StyledGhostName> Ghost </StyledGhostName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/grass-type">
          <StyledNamesDiv>
            <StyledIcon src={Grass} alt="grass type icon" />
            <StyledGrassName> Grass </StyledGrassName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/ground-type">
          <StyledNamesDiv>
            <StyledIcon src={Ground} alt="ground type icon" />
            <StyledGroundName> Ground </StyledGroundName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/ice-type">
          <StyledNamesDiv>
            <StyledIcon src={Ice} alt="Ice type icon" />
            <StyledIceName> Ice </StyledIceName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/normal-type">
          <StyledNamesDiv>
            <StyledIcon src={Normal} alt="normal type icon" />
            <StyledNormalName> Normal </StyledNormalName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/poison-type">
          <StyledNamesDiv>
            <StyledIcon src={Poison} alt="poison type icon" />
            <StyledPoisonName> Poison </StyledPoisonName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/psychic-type">
          <StyledNamesDiv>
            <StyledIcon src={Psychic} alt="psychic type icon" />
            <StyledPsychicName> Psychic </StyledPsychicName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/rock-type">
          <StyledNamesDiv>
            <StyledIcon src={Rock} alt="rock type icon" />
            <StyledRockName> Rock </StyledRockName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/steel-type">
          <StyledNamesDiv>
            <StyledIcon src={Steel} alt="steel type icon" />
            <StyledSteelName> Steel </StyledSteelName>
          </StyledNamesDiv>
        </StyledLink>

        <StyledLink className="link" href="/water-type">
          <StyledNamesDiv>
            <StyledIcon src={Water} alt="water type icon" />
            <StyledWaterName> Water </StyledWaterName>
          </StyledNamesDiv>
        </StyledLink>
      </StyledLinksDiv>
      </StyledContainer>
    </StyledDiv>
  );
};

export default SearchByType;

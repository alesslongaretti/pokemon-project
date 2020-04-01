import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff5b3;
  text-shadow: -1px -1px #3b4cca, 1px -1px #3b4cca, -1px 1px #3b4cca,
    1px 1px #3b4cca;
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(1px 1px 2px #000);
  font-size: 20px;
  margin: 5%;
  &:hover {
    color:white;
    -webkit-text-shadow: 0 0 5px #2258a8,0 0 20px #175cd4;
    -moz-text-shadow: 0 0 5px #2258a8,0 0 20px #175cd4;
    -ms-text-shadow: 0 0 5px #2258a8,0 0 20px #175cd4;
     -o-text-shadow: 0 0 5px #2258a8,0 0 20px #175cd4;
    text-shadow: 0 0 5px #2258a8,0 0 20px #175cd4;
    // @include textShadow((0 0 10px #ff401a,0 0 50px #ff9b1a));
  }
`;

const Navigation = props => {
  return (
    <div>
      <StyledLink className="home-link" to="/">
        Home
      </StyledLink>
      <StyledLink className="type-link" to="/types">
        Types
      </StyledLink>
    </div>
  );
};

export default Navigation;

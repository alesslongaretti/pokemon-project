import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff5b3;
  text-shadow: -1px -1px #3b4cca, 1px -1px #3b4cca, -1px 1px #3b4cca,
    1px 1px #3b4cca;
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(1px 1px 2px #000);
  font-size: 18px;
  margin: 5%;
`;

const Navigation = props => {
  return (
    <div>
      <StyledLink className="home-link" href="/">
        Home
      </StyledLink>
      <StyledLink className="type-link" href="/types">
        Types
      </StyledLink>
    </div>
  );
};

export default Navigation;

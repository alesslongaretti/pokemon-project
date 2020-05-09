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

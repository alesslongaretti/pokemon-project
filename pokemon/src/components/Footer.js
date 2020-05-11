import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  text-decoration: none;
  color: #fff5b3;
  text-shadow: -1px -1px #3b4cca, 1px -1px #3b4cca, -1px 1px #3b4cca,
    1px 1px #3b4cca;
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(1px 1px 2px #000);
  font-size: 15px;
  margin-top: 6%;
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

const Footer = props => {
  return (
    <div>
        <StyledFooter>
          &copy; Copyright 2020 Pokemon Database
        </StyledFooter>
    </div>
  );
};

export default Footer;

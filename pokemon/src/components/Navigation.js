import React, { useState } from "react";
import { Link } from "react-router-dom";
import PokemonLogo from "../Images/PokemonLogo.png";
import styled from "styled-components";

const Container = styled.div`
  background: red;
  padding: 1%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  border: 5px solid black;
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
  font-size: 22px;
  text-decoration: none;
  color: #fff5b3;
  text-shadow: -1px -1px #3b4cca, 1px -1px #3b4cca, -1px 1px #3b4cca,
    1px 1px #3b4cca;
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(1px 1px 2px #000);
<<<<<<< HEAD
  width: 15%;
`;

const Search = styled.input`
  -webkit-filter: drop-shadow(1px 1px 2px #000);
  filter: drop-shadow(1px 1px 2px #000);
  font-size: 18px;
  padding-left: 10px;
  width: 15%;
=======
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
>>>>>>> f8ecacd6e96fdcaf093858519e3f8634bd9ecc2f
`;

// const StyledHeader = styled.h1`
//   color: white;
//   font-size: 35px;
//   -webkit-text-stroke-width: 1.5px;
//   -webkit-text-stroke-color: #3b4cca;
//   filter: drop-shadow(5px 5px 5px black);
// `;

const StyledImg = styled.img`
  align-item: center;
  width: 20%;
  height: 20%;
  -webkit-filter: drop-shadow(5px 5px 10px #000000);
  filter: drop-shadow(5px 5px 10px #000000);
`;

const Navigation = (props) => {
  const [toggle, setToggle] = useState(false);

  const switchLink = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      {/* <StyledHeader>Welcome To The Pokemon Database</StyledHeader> */}
      {toggle ? (
        <StyledLink className="type-link" to="/types" onClick={switchLink}>
          Search By Types
        </StyledLink>
      ) : (
        <StyledLink className="home-link" to="/" onClick={switchLink}>
          Search By Pokemon
        </StyledLink>
      )}
      <StyledImg src={PokemonLogo} alt="pokemons" />
      <Search type="text" placeholder="Search By Name" />
    </Container>
  );
};

export default Navigation;

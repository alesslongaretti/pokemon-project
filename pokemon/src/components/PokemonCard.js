import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-align: center;
    background-color: #FFCB05;
    padding: 1%;
    margin: 1%;
    width: 25%;
    border-radius: 8px;
`;

const StyledImg = styled.img`
    margin: 1%;
    border-radius: 5px;
`;

const StyledHeader = styled.h3`
    margin: 1%;
    color: #003A70;
`;

const StyledParagraph = styled.p`
    margin: .5%;
    color: #3D7DCA;
`;

const PokemonCard = () => {
    return (
        <StyledDiv>
            <StyledImg src={response.data.sprites.font_default} />
            <StyledHeader>{pokemon.name}</StyledHeader>
            <StyledParagraph>Height: {response.data.height}</StyledParagraph>
            <StyledParagraph>Weight: {response.data.weight}</StyledParagraph>
        </StyledDiv>
    )
}

export default PokemonCard;
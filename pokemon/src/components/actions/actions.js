import axios from 'axios';
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONS_DATA = "GET_POKEMONS_DATA";

export const getPokemons = () => dispatch => {
    dispatch({ type: GET_POKEMONS });
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(res => {
                dispatch({ type: GET_POKEMONS, payload: res.data.results })
                console.log(res.data.results)
            })
            .catch(err => {
                console.log(err);
            })
};

export const getData = () => dispatch => {
    dispatch({ type: GET_POKEMONS_DATA });
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(res => {
                let pokemonData = res.data.results.map(pokemon => pokemon.url);
                dispatch({ type: GET_POKEMONS, payload: pokemonData })
                console.log(pokemonData)
            })
            .catch(err => {
                console.log(err);
            })
};


import axios from 'axios';
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONS_DATA = "GET_POKEMONS_DATA";

export const getPokemons = () => dispatch => {
    dispatch({ type: GET_POKEMONS });
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(res => {
                let pokemonName = res.data.results.map(item => item.name);
                dispatch({ type: GET_POKEMONS, payload: pokemonName })
                console.log(pokemonName)
                let pokemonData = res.data.results.map(item => item.url);
                dispatch({ type: GET_POKEMONS_DATA, payload: pokemonData })
                console.log(pokemonData)
            })
            .catch(err => {
                console.log(err);
            })
};

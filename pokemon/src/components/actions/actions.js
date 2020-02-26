import axios from 'axios';
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONS_DATA = "GET_POKEMONS_DATA";

export const getPokemons = () => dispatch => {
    dispatch({ type: GET_POKEMONS });
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=964")
            .then(res => {
                dispatch({ type: GET_POKEMONS, payload: res.data.results })
                console.log(JSON.stringify(res.data.results))
            })
            .catch(err => {
                console.log(err);
            })
};

export const getPokemonsData = (url) => dispatch => {
    dispatch({ type: GET_POKEMONS_DATA });
        axios
            .get(url)
            .then(response => {
                dispatch({ type: GET_POKEMONS_DATA, payload: response.data })
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
};
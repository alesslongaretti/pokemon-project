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

export const getData = (url) => dispatch => {
    dispatch({ type: GET_POKEMONS_DATA });
        axios
            .get(`${url}`)
            .then(res => {
                dispatch({ type: GET_POKEMONS, payload: res.data.results })
                console.log(res.data.results)
            })
            .catch(err => {
                console.log(err);
            })
};


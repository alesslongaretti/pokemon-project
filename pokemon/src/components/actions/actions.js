import axios from 'axios';
// export const GET_POKEMONS = "GET_POKEMONS";
// export const GET_POKEMONS_URL = "GET_POKEMONS_URL";
export const GET_POKEMONS_DATA = "GET_POKEMONS_DATA";

export const getPokemons = () => dispatch => {
    dispatch({ type: GET_POKEMONS_DATA });
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(res => {
                let pokemonUrl = res.data.results.map(item => item.url);
                return pokemonUrl.forEach(url => {
                axios.get(`${url}`)
                .then(res => {
                    let pokemonData = res.data;
                    dispatch({ type: GET_POKEMONS_DATA, payload: pokemonData })
                    console.log(pokemonData)
            })
            })
            })
            .catch(err => {
                console.log(err);
            })
};

// export const getPokemonData = (url) => dispatch => {
//     dispatch({ type: GET_POKEMONS_DATA });
//     axios
//         .get(`${url}`)
//         .then(res => {
//             dispatch({ type: GET_POKEMONS_DATA, payload: res})
//             console.log(res)
//         })
//         .catch(err => {
//             console.log(err);
//         })
// };
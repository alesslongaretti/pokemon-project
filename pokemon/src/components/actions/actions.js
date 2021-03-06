import axios from 'axios';
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
                    dispatch({ type: GET_POKEMONS_DATA, payload: ({ name: pokemonData.name, picture: pokemonData.sprites.front_default, height: pokemonData.height, weight: pokemonData.weight, types: pokemonData.types.map((pokemon) => pokemon.type.name) })  
                })
            })
            })
            })
            .catch(err => {
                console.log(err);
            })
};
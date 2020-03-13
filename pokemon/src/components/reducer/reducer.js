// import { GET_POKEMONS } from '../actions/actions';
// import { GET_POKEMONS_URL } from '../actions/actions';
import { GET_POKEMONS_DATA } from '../actions/actions';

export const initialState = {
  pokemonData: []
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        // case GET_POKEMONS:
        //     return {
        //         ...state,
        //         pokemonName: action.payload
        //     };
        // case GET_POKEMONS_URL:
        //     return {
        //         ...state,
        //         pokemonUrl: action.payload
        //     }
        case GET_POKEMONS_DATA:
            return {
                ...state,
                pokemonData: action.payload
            }    
        default:
            return state;
    }
};
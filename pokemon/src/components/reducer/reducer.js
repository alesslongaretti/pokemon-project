import { GET_POKEMONS_DATA } from '../actions/actions';

export const initialState = {
  pokemonData: []
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS_DATA:
            return {
                ...state,
                pokemonData: [...state.pokemonData, action.payload]
            }   
        default:
            return state;
    }
};
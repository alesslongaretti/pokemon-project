import { GET_POKEMONS } from '../actions/actions';

export const initialState = {
    pokemon: []
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state, 
                pokemon: action.payload
            };
        default:
            return state;
    }
};
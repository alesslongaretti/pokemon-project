import { GET_POKEMONS } from '../actions/actions';
import { GET_POKEMONS_DATA } from '../actions/actions';

export const initialState = {
    pokemon: [],
    data: []
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state, 
                pokemon: action.payload
            };
        case GET_POKEMONS_DATA:
            return {
                ...state,
                data: action.payload
            }   
        default:
            return state;
    }
};
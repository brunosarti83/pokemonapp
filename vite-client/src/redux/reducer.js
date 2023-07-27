import { GET_POKEMONS } from './actions';

const initialState = {
    allPokemons: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;
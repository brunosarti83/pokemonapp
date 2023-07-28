import { GET_POKEMONS, FILTER_POKEMONS } from './actions';

const initialState = {
    allPokemons: [],
    savedPokemons: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                savedPokemons: action.payload
            }
        case FILTER_POKEMONS:
            const { type, origin, orderBy, direction } = action.payload
            const filtered = [...state.savedPokemons]
            if (type !== 'all') {
                filtered = filtered.filter(poke => poke.Types.some(tipo => tipo.name === type))
            }
            if (origin !== 'all') {
                if (origin === 'original') {
                    filtered = filtered.filter(poke => Boolean(Number(poke.id)))
                } else {
                    filtered = filtered.filter(poke => !Boolean(Number(poke.id)))
                }
            }
                         

            
        default:
            return state
    }
}

export default rootReducer;
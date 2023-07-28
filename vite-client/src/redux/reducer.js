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
            let filtered = [...state.savedPokemons]
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
            if (orderBy === 'name') {
                filtered.sort((a, b) => {
                    if (a.name < b.name) {
                        return (direction === 'A') ? -1 : 1
                    } else if (a.name > b.name) {
                        return (direction === 'A') ? 1 : -1
                    } else {
                        return 0
                    }
                })
            } else if (orderBy === 'attack') {
                filtered.sort((a, b) => {
                    if (a.attack < b.attack) {
                        return (direction === 'A') ? -1 : 1
                    } else if (a.attack > b.attack) {
                        return (direction === 'A') ? 1 : -1
                    } else {
                        return 0
                    }
                })
            }
            return {
                ...state,
                allPokemons: filtered
            }
        
        default:
            return state
    }
}

export default rootReducer;
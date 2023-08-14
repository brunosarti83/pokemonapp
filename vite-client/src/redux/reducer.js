import { GET_POKEMONS, FILTER_POKEMONS, GET_BY_NAME, RELOAD, SET_PAGE } from './actions';

const initialState = {
    showPokemons: [],
    savedPokemons: [],
    allPokemons: [],
    currentPage: 1,
    reduxFilter: {
        type: 'all',
        origin: 'all',
        orderBy: 'none',
        direction: 'none',
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                showPokemons: action.payload,
                savedPokemons: action.payload,
                allPokemons: action.payload
            }
        case FILTER_POKEMONS:
            const { type, origin, orderBy, direction } = action.payload
            if (state.reduxFilter.type !== type
                || state.reduxFilter.origin !== origin
                || state.reduxFilter.orderBy !== orderBy
                || state.reduxFilter.direction !== direction) {
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
                        showPokemons: filtered,
                        reduxFilter: action.payload,
                        currentPage: 1
                    }
                } else {
                    return state
                }

        case GET_BY_NAME:
            if (!action.payload.length) {
                return state
            } else {
                return {
                    ...state,
                    showPokemons: action.payload,
                    savedPokemons: action.payload
                }
            }

        case RELOAD:
            return {
                ...state,
                showPokemons: [...state.allPokemons],
                savedPokemons: [...state.allPokemons],
                currentPage: 1
            }

        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        
        default:
            return state
    }
}

export default rootReducer;